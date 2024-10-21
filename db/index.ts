import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import 'dotenv/config';
import { schema } from './schema';

export const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  };

// Database URL
export const connectionString = `postgres://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;

// for migrations
const migrationClient = postgres(connectionString, { max: 1 });
//migrate(drizzle(migrationClient), ...);

// for query purposes
const queryClient = postgres(connectionString);
const db = drizzle(queryClient, { schema });

export default db;
// Example query
//const results = await db.select().from(...);