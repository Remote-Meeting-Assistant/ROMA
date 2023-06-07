import PG, { QueryResult } from 'pg';
import * as dotenv from 'dotenv';

const Pool = PG.Pool;

dotenv.config();

dotenv.config()
const PG_URI = process.env.ELEPHANT_URL;

const pool: PG.Pool = new Pool({
  connectionString: PG_URI,
});

export default {
  query: (text: string, params?: (number | string)[], callback?: () => void ) => {
    console.log("executed query", text);
    const result = pool.query(text, params, callback)
    return result;
  },
};
