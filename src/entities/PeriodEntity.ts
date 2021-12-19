/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import SubjectEntity from './SubjectEntity';

@Entity('periods')
export default class PeriodEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  period: string;

  @OneToMany(() => SubjectEntity, (subject) => subject.period)
  subjects: SubjectEntity[];
}
