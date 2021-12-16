/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tests')
export default class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

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
}
