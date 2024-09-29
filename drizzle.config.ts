import * as dotenv from 'dotenv';
import { type Config } from 'drizzle-kit';

dotenv.config({ path: '.env' });

export default {
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL || '',
  },
} satisfies Config;
