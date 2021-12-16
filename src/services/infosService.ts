import { getRepository } from 'typeorm';
import Semesters from '../entities/Semesters';
import Subjects from '../entities/Subjects';
import Teachers from '../entities/Teachers';
import TestCategories from '../entities/TestCategories';
import TeacherSubjects from '../entities/TeacherSubjects';

async function getInfos() {
  const semesters = await getRepository(Semesters).find();
  const subjects = await getRepository(Subjects).find();
  const teachers = await getRepository(Teachers).find();
  const testCategories = await getRepository(TestCategories).find();
  const teacherSubjects = await getRepository(TeacherSubjects).find();
  return {
    semesters,
    subjects,
    teachers,
    testCategories,
    teacherSubjects,
  };
}

export { getInfos };
