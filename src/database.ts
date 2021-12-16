import './setup';
import { getConnectionManager } from 'typeorm';

export default async function connect() {
  const connectionManager = getConnectionManager();
  const connection = connectionManager.create({
    name: 'default',
    type: 'postgres',
    url: `postgres://postgres:123456@localhost:5432/${process.env.DB_DATABASE}`,
    entities: ['src/entities/*.ts'],
  });
  await connection.connect();
  return connection;
}
