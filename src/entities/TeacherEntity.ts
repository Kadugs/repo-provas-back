/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import TestEntity from './TestEntity';

@Entity('teachers')
export default class TeacherEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => TestEntity, (test) => test.teacher)
  tests: TestEntity[];
}
