import dotenv from 'dotenv';

const path: string = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';

dotenv.config({
  path,
});
