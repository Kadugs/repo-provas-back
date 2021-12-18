/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('semesters')
export default class SemesterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  semester: string;
}
