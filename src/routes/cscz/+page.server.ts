import { db } from '$lib/server/db';
import { players } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const allPlayers = await db.select().from(players).orderBy(desc(players.kills));
	
	return {
		players: allPlayers
	};
};