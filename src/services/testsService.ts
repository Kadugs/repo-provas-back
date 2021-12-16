import { getRepository } from 'typeorm';
import TestInterface from '../interfaces/Test';
import TestEntity from '../entities/Test';

async function addTest(testBody: TestInterface) {
  console.log(testBody);
  await getRepository(TestEntity).insert(testBody);
}

export { addTest };
