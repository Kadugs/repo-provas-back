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
      link: faker.internet.url(),
      semesterId: 1,
      categoryId: 1,
      subjectId: 1,
      teacherId: 1,
    };

    const result = await supertest(app).post('/tests').send(body);
    expect(result.status).toBe(201);
  });
});
describe('GET /infos', () => {
  it('should return 200 for valid params', async () => {
    const result = await supertest(app).get('/infos');
    expect(result.status).toBe(200);
  });
});
describe('GET /infos/tests/teachers', () => {
  it('should return 200', async () => {
    const result = await supertest(app).get('/infos/tests/teachers');
    expect(result.status).toBe(200);
  });
});
describe('GET /infos/tests/teachers/:id', () => {
  it('should return 400', async () => {
    const result = await supertest(app).get('/infos/tests/teachers/0');
    expect(result.status).toBe(400);
  });
  it('should return 200', async () => {
    const result = await supertest(app).get('/infos/tests/teachers/1');
    expect(result.status).toBe(200);
  });
});
describe('GET /infos/tests/subjects', () => {
  it('should return 200', async () => {
    const result = await supertest(app).get('/infos/tests/subjects');
    expect(result.status).toBe(200);
  });
});
describe('GET /infos/tests/subjects/:id', () => {
  it('should return 400', async () => {
    const result = await supertest(app).get('/infos/tests/subjects/0');
    expect(result.status).toBe(400);
  });
  it('should return 200', async () => {
    const result = await supertest(app).get('/infos/tests/subjects/1');
    expect(result.status).toBe(200);
  });
});

afterAll(async () => {
  await getConnection().close();
});
