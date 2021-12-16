import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import connectDatabase from './database';
import testRoute from './routes/testsRoute';
import ServerMiddlewareError from './errors/ServerMiddlewareError';

const app = express();

app.use(cors());
app.use(express.json());

app.use(testRoute);

app.use(ServerMiddlewareError);

export async function init() {
  await connectDatabase();
}

export default app;
