import { mysqlTable, varchar, int, timestamp, binary } from 'drizzle-orm/mysql-core';

export const players = mysqlTable('players', {
	name: varchar('name', { length: 32 }),
	steamid: varchar('steamid', { length: 32 }).primaryKey(),
	kills: int('kills').default(0),
	user_type: varchar('user_type', { length: 16 }).default(''),
	deaths: int('deaths').default(0),
	total_played_time: int('total_played_time').default(0),
	ammo_packs: int('ammo_packs').default(0),
	lastconnect: timestamp('lastconnect').defaultNow(),
	knife: int('knife').default(0),
	country: varchar('country', { length: 16 }).default(''),
	avatar: varchar('avatar', { length: 500 })
});