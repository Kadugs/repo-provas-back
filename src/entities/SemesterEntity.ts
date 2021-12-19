/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import TestEntity from './TestEntity';

@Entity('semesters')
export default class SemesterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  semester: string;

  @OneToMany(() => TestEntity, (test) => test.semester)
  test: TestEntity;
}
