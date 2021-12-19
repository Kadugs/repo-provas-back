/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import TestEntity from './TestEntity';

@Entity('test_categories')
export default class TestCategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @OneToMany(() => TestEntity, (test) => test.category)
  tests: TestEntity[];
}
