/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('teachers_subjects')
export default class TeacherSubjects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'subject_id' })
  subjectId: number;

  @Column({ name: 'teacher_id' })
  teacherId: number;
}
