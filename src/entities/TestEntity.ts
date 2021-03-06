/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import SemesterEntity from './SemesterEntity';
import SubjectEntity from './SubjectEntity';
import TeacherEntity from './TeacherEntity';
import TestCategoryEntity from './TestCategoryEntity';

@Entity('tests')
export default class TestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  link: string;

  @Column({ name: 'semester_id' })
  semesterId: number;

  @Column({ name: 'category_id' })
  categoryId: number;

  @Column({ name: 'subject_id' })
  subjectId: number;

  @Column({ name: 'teacher_id' })
  teacherId: number;

  @ManyToOne(() => TeacherEntity, (teacher) => teacher.tests)
  @JoinColumn({ name: 'teacher_id' })
  teacher: TeacherEntity;

  @ManyToOne(() => TestCategoryEntity, (teacher) => teacher.tests)
  @JoinColumn({ name: 'category_id' })
  category: TestCategoryEntity;

  @ManyToOne(() => SemesterEntity, (semester) => semester.test)
  @JoinColumn({ name: 'semester_id' })
  semester: SemesterEntity;

  @ManyToOne(() => SubjectEntity, (subject) => subject.test)
  @JoinColumn({ name: 'subject_id' })
  subject: SubjectEntity;
}
