import { getRepository } from 'typeorm';
import SemesterEntity from '../entities/SemesterEntity';
import SubjectEntity from '../entities/SubjectEntity';
import TeacherEntity from '../entities/TeacherEntity';
import TestCategoryEntity from '../entities/TestCategoryEntity';
import TeacherSubjectsEntity from '../entities/TeacherSubjectsEntity';
import PeriodEntity from '../entities/PeriodEntity';

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
    .filter((item) => item.testQuantity > 0);
  return arrTests;
}

async function getSubjectsList() {
  const subjects = await getRepository(PeriodEntity).find({
    relations: ['subjects', 'subjects.tests'],
  });
  const arrSubjects = subjects.map((item) => ({
    id: item.id,
    period: item.period,
    subjects: item.subjects
      .filter((subject) => subject.tests.length > 0)
      .map((subject) => ({
        id: subject.id,
        subject: subject.subject,
      })),
  }));
  return arrSubjects.filter((subject) => subject.subjects.length > 0);
}
async function getTestsById(id: number, type: string) {
  const categories = await getRepository(TestCategoryEntity).find({
    relations: ['tests', 'tests.semester', 'tests.subject', 'tests.teacher'],
  });
  const arrCategories = categories
    .filter((category) => category.tests.length > 0)
    .map((category) => ({
      id: category.id,
      category: category.category,
      tests: category.tests
        .filter(
          (test) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            (type === 'teacher' && test.teacherId === id) ||
            (type === 'subject' && test.subjectId === id),
        )
        .map((test) => ({
          id: test.id,
          link: test.link,
          semester: test.semester.semester,
          subject: test.subject.subject,
          teacher: test.teacher.name,
        })),
    }))
    .filter((item) => item.tests.length > 0);
  return arrCategories;
}
export { getFormInfos, getTeachersList, getSubjectsList, getTestsById };
