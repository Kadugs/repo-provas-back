/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import TestEntity from './TestEntity';

@Entity('subjects')
export default class SubjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @OneToMany(() => TestEntity, (test) => test.subject)
  test: TestEntity;
}
