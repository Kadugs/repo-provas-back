import dotenv from 'dotenv';

let path: string = '.env';

if (process.env.NODE_ENV === 'development') {
  path = '.env.dev';
}
if (process.env.NODE_ENV === 'test') {
  path = '.env.test';
}

dotenv.config({
  path,
});
