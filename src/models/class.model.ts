import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Class extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
    name: 'teacher_id',
  })
  teacherId: number;

  @property({
    type: 'date',
    required: true,
    name: 'start_at',
  })
  startAt: string;

  @property({
    type: 'date',
    required: true,
    name: 'end_at',
  })
  endAt: string;

  @property({
    type: 'date',
    name: 'created_at',
  })
  createdAt?: string;

  @property({
    type: 'date',
    name: 'updated_at',
  })
  updatedAt?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Class>) {
    super(data);
  }
}

export interface ClassRelations {
  // describe navigational properties here
}

export type ClassWithRelations = Class & ClassRelations;
