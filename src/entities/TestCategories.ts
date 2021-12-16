/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('test_categories')
export default class TestCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;
}
