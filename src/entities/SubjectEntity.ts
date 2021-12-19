/* eslint-disable indent */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import PeriodEntity from './PeriodEntity';
import TestEntity from './TestEntity';

@Entity('subjects')
export default class SubjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @OneToMany(() => TestEntity, (test) => test.subject)
  test: TestEntity;

  @OneToMany(() => TestEntity, (test) => test.subject)
  tests: TestEntity[];

  @ManyToOne(() => PeriodEntity, (period) => period.subjects)
  @JoinColumn({ name: 'period_id' })
  period: PeriodEntity;
}
