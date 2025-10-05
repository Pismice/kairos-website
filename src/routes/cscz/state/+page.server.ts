import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function load() {
    try {
        const { stdout } = await execAsync('quakestat -a2s 91.99.14.212:27015');
        
        const lines = stdout.trim().split('\n');
        const serverLine = lines.find(line => line.includes('91.99.14.212:27015'));
        
        if (!serverLine || serverLine.includes('DOWN')) {
            return {
                serverStatus: 'down',
            };
        }
        
        // Parse server info from the output
        const parts = serverLine.split(/\s+/);
        const fullName = parts.slice(4).join(' ');
        const czeroIndex = fullName.toLowerCase().indexOf('czero');
        const serverName = czeroIndex !== -1 ? fullName.substring(czeroIndex + 5).trim() : fullName;
        
        return {
            serverStatus: 'up',
            serverInfo: {
                address: parts[0],
                players: parts[1],
                map: parts[3],
                name: serverName
            }
        };
    } catch (error) {
        return {
            serverStatus: 'error',
        };
    }
}