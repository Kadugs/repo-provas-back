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

async function getTeachersList() {
  const tests = await getRepository(TeacherEntity).find({ relations: ['tests'] });
  const arrTests = tests
    .map((item) => ({
      id: item.id,
      name: item.name,
      testQuantity: item.tests.length,
    }))
    .filter((item) => item.testQuantity !== 0);
  return arrTests;
}

async function getTeacherTestsById(id: number) {
  const categories = await getRepository(TestCategoryEntity).find({
    relations: ['tests', 'tests.semester', 'tests.subject'],
  });
  const arrCategories = categories
    .filter((category) => category.tests.length > 0)
    .map((category) => ({
      id: category.id,
      category: category.category,
      tests: category.tests
        .filter((test) => test.teacherId === id)
        .map((test) => ({
          id: test.id,
          link: test.link,
          semester: test.semester.semester,
          subject: test.subject.subject,
        })),
    }));
  return arrCategories;
}

export { getFormInfos, getTeachersList, getTeacherTestsById };
