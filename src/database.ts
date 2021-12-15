import { getConnectionManager } from 'typeorm';

export default async function connect() {
  const connectionManager = await getConnectionManager();
  const connection = connectionManager.create({
    name: 'default',
    type: 'postgres',
    url: 'postgres://usuario:senha@host:porta/banco',
    entities: ['src/entities/*.ts'],
  });
  await connection.connect();
  return connection;
}
