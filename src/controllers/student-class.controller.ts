import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {StudentClass} from '../models';
import {StudentClassRepository} from '../repositories';

export class StudentClassController {
  constructor(
    @repository(StudentClassRepository)
    public studentClassRepository : StudentClassRepository,
  ) {}

  @post('/student-classes')
  @response(200, {
    description: 'StudentClass model instance',
    content: {'application/json': {schema: getModelSchemaRef(StudentClass)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StudentClass, {
            title: 'NewStudentClass',
            
          }),
        },
      },
    })
    studentClass: StudentClass,
  ): Promise<StudentClass> {
    return this.studentClassRepository.create(studentClass);
  }

  @get('/student-classes/count')
  @response(200, {
    description: 'StudentClass model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(StudentClass) where?: Where<StudentClass>,
  ): Promise<Count> {
    return this.studentClassRepository.count(where);
  }

  @get('/student-classes')
  @response(200, {
    description: 'Array of StudentClass model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(StudentClass, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(StudentClass) filter?: Filter<StudentClass>,
  ): Promise<StudentClass[]> {
    return this.studentClassRepository.find(filter);
  }

  @patch('/student-classes')
  @response(200, {
    description: 'StudentClass PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StudentClass, {partial: true}),
        },
      },
    })
    studentClass: StudentClass,
    @param.where(StudentClass) where?: Where<StudentClass>,
  ): Promise<Count> {
    return this.studentClassRepository.updateAll(studentClass, where);
  }

  @get('/student-classes/{id}')
  @response(200, {
    description: 'StudentClass model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(StudentClass, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(StudentClass, {exclude: 'where'}) filter?: FilterExcludingWhere<StudentClass>
  ): Promise<StudentClass> {
    return this.studentClassRepository.findById(id, filter);
  }

  @patch('/student-classes/{id}')
  @response(204, {
    description: 'StudentClass PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StudentClass, {partial: true}),
        },
      },
    })
    studentClass: StudentClass,
  ): Promise<void> {
    await this.studentClassRepository.updateById(id, studentClass);
  }

  @put('/student-classes/{id}')
  @response(204, {
    description: 'StudentClass PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() studentClass: StudentClass,
  ): Promise<void> {
    await this.studentClassRepository.replaceById(id, studentClass);
  }

  @del('/student-classes/{id}')
  @response(204, {
    description: 'StudentClass DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.studentClassRepository.deleteById(id);
  }
}
