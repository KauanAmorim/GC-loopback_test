import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {
      table: 'teacher',
      schema: 'public',
    },
    strict: true,
  },
})
export class Teacher extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'boolean',
    required: true,
  })
  active: boolean;

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

  constructor(data?: Partial<Teacher>) {
    super(data);
  }
}

export interface TeacherRelations {
  // describe navigational properties here
}

export type TeacherWithRelations = Teacher & TeacherRelations;
