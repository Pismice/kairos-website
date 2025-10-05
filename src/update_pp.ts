import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { players } from './lib/server/db/schema';
import { eq } from 'drizzle-orm';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const STEAM_API_KEY = process.env.STEAM_API_KEY;
const DATABASE_URL = process.env.DATABASE_URL;

if (!STEAM_API_KEY) {
    console.error('STEAM_API_KEY environment variable is required');
    process.exit(1);
}

if (!DATABASE_URL) {
    console.error('DATABASE_URL environment variable is required');
    process.exit(1);
}

async function getSteamProfilePicture(steamId: string): Promise<string | null> {
    try {
        const response = await fetch(
            `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${steamId}`
        );
        
        if (!response.ok) {
            throw new Error(`Steam API request failed: ${response.status}`);
        }

        const data = await response.json();
        const player = data.response?.players?.[0];
        
        // Returns the full-size avatar URL
        return player?.avatarfull || player?.avatarmedium || player?.avatar || null;
    } catch (error) {
        console.error(`Error fetching Steam profile picture for ${steamId}:`, error);
        return null;
    }
}

async function updatePlayerAvatars() {
    let connection;
    
    try {
        // Create database connection
        connection = await mysql.createConnection(DATABASE_URL as string);
        const db = drizzle(connection);

        console.log('Fetching all players...');
        
        // Get all players
        const allPlayers = await db.select().from(players);
        console.log(`Found ${allPlayers.length} players`);

        let updated = 0;
        let failed = 0;

        // Process players in batches to avoid rate limiting
        const batchSize = 10;
        for (let i = 0; i < allPlayers.length; i += batchSize) {
            const batch = allPlayers.slice(i, i + batchSize);
            
            console.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(allPlayers.length / batchSize)}`);
            
            const promises = batch.map(async (player) => {
                const avatarUrl = await getSteamProfilePicture(player.steamid);
                
                if (avatarUrl) {
                    try {
                        await db
                            .update(players)
                            .set({ avatar: avatarUrl })
                            .where(eq(players.steamid, player.steamid));
                        
                        console.log(`✅ Updated avatar for ${player.name} (${player.steamid})`);
                        return { success: true };
                    } catch (error) {
                        console.error(`❌ Failed to update avatar for ${player.name}:`, error);
                        return { success: false };
                    }
                } else {
                    console.log(`⚠️  No avatar found for ${player.name} (${player.steamid})`);
                    return { success: false };
                }
            });

            const results = await Promise.all(promises);
            updated += results.filter(r => r.success).length;
            failed += results.filter(r => !r.success).length;

            // Add delay between batches to respect Steam API rate limits
            if (i + batchSize < allPlayers.length) {
                console.log('Waiting 2 seconds before next batch...');
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }

        console.log('\n📊 Summary:');
        console.log(`✅ Successfully updated: ${updated} players`);
        console.log(`❌ Failed to update: ${failed} players`);
        console.log(`📋 Total processed: ${allPlayers.length} players`);

    } catch (error) {
        console.error('Script failed:', error);
        process.exit(1);
    } finally {
        if (connection) {
            await connection.end();
            console.log('Database connection closed');
        }
    }
}

// Run the script
updatePlayerAvatars().then(() => {
    console.log('Script completed successfully');
    process.exit(0);
}).catch((error) => {
    console.error('Script failed:', error);
    process.exit(1);
});