import { getRepository } from 'typeorm';
import TestInterface from '../interfaces/Test';
import TestEntity from '../entities/TestEntity';

async function addTest(testBody: TestInterface) {
  await getRepository(TestEntity).insert(testBody);
}

export { addTest };
