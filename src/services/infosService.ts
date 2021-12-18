import { getRepository } from 'typeorm';
import SemesterEntity from '../entities/SemesterEntity';
import SubjectEntity from '../entities/SubjectEntity';
import TeacherEntity from '../entities/TeacherEntity';
import TestCategoryEntity from '../entities/TestCategoryEntity';
import TeacherSubjectsEntity from '../entities/TeacherSubjectsEntity';

async function getFormInfos() {
  const semesters = await getRepository(SemesterEntity).find();
  const subjects = await getRepository(SubjectEntity).find();
  const teachers = await getRepository(TeacherEntity).find();
  const testCategories = await getRepository(TestCategoryEntity).find();
  const teacherSubjects = await getRepository(TeacherSubjectsEntity).find();
  return {
    semesters,
    subjects,
    teachers,
    testCategories,
    teacherSubjects,
  };
}

async function getTeachersTests() {
  const tests = await getRepository(TeacherEntity).find({ relations: ['tests'] });
  const arrTests = tests.map((item) => ({
    name: item.name,
    testQuantity: item.tests.length,
  }));
  return arrTests;
}

export { getFormInfos, getTeachersTests };
