import {model, property} from '@loopback/repository';
import {Student} from './index';
@model({
  settings: {
    postgresql: {
      table: 'student_class_view',
      schema: 'public',
    },
    strict: true,
  },
})
export class StudentClassView extends Student {
  @property({
    type: 'number',
    required: true,
    name: 'class_id',
  })
  classId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<StudentClassView>) {
    super(data);
  }
}

export interface StudentClassViewRelations {
  // describe navigational properties here
}

export type StudentClassViewWithRelations = StudentClassView &
  StudentClassViewRelations;
