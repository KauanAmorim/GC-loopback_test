import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {get, getModelSchemaRef, param, response} from '@loopback/rest';
import {StudentClassView} from '../models';
import {StudentClassViewRepository} from '../repositories';

export class StudentClassViewController {
  constructor(
    @repository(StudentClassViewRepository)
    public studentClassViewRepository: StudentClassViewRepository,
  ) {}

  @get('/student-class-views/count')
  @response(200, {
    description: 'StudentClassView model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(StudentClassView) where?: Where<StudentClassView>,
  ): Promise<Count> {
    return this.studentClassViewRepository.count(where);
  }

  @get('/student-class-views')
  @response(200, {
    description: 'Array of StudentClassView model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(StudentClassView, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(StudentClassView) filter?: Filter<StudentClassView>,
  ): Promise<StudentClassView[]> {
    return this.studentClassViewRepository.find(filter);
  }

  @get('/student-class-views/{id}')
  @response(200, {
    description: 'StudentClassView model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(StudentClassView, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(StudentClassView, {exclude: 'where'})
    filter?: FilterExcludingWhere<StudentClassView>,
  ): Promise<StudentClassView> {
    return this.studentClassViewRepository.findById(id, filter);
  }
}
