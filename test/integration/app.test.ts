/* eslint-disable no-undef */
import supertest from 'supertest';
import faker from 'faker';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';

beforeAll(async () => {
  await init();
});

describe('POST /tests', () => {
  it('should return 400 for invalid params', async () => {
    const result = await supertest(app).post('/tests');
    expect(result.status).toBe(400);
  });
  it('should return 201 for valid params', async () => {
    const body = {
      name: faker.name.findName(),
      link: faker.internet.url(),
      semesterId: 1,
      categoryId: 1,
      subjectId: 1,
      teacherId: 1,
    };

    const result = await supertest(app).post('/tests').send(body);
    expect(result.status).toBe(201);
  });
  afterAll(async () => {});
});

afterAll(async () => {
  await getConnection().close();
});
