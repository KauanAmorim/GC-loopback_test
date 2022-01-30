import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class StudentClass extends Entity {
  @property({
    type: 'number',
    required: true,
    name: 'class_id',
  })
  classId: number;

  @property({
    type: 'number',
    required: true,
    name: 'student_id',
  })
  studentId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<StudentClass>) {
    super(data);
  }
}

export interface StudentClassRelations {
  // describe navigational properties here
}

export type StudentClassWithRelations = StudentClass & StudentClassRelations;
