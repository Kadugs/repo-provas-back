/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('subjects')
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;
}
