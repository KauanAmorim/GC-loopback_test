import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Class} from '../models';
import {ClassRepository} from '../repositories';

export class ClassController {
  constructor(
    @repository(ClassRepository)
    public classRepository: ClassRepository,
  ) {}

  @post('/classes')
  @response(200, {
    description: 'Class model instance',
    content: {'application/json': {schema: getModelSchemaRef(Class)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class, {
            title: 'NewClass',
            exclude: ['id'],
          }),
        },
      },
    })
    classData: Omit<Class, 'id'>,
  ): Promise<Class> {
    return this.classRepository.create(classData);
  }

  @get('/classes/count')
  @response(200, {
    description: 'Class model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Class) where?: Where<Class>): Promise<Count> {
    return this.classRepository.count(where);
  }

  @get('/classes')
  @response(200, {
    description: 'Array of Class model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Class, {includeRelations: true}),
        },
      },
    },
  })
  async find(@param.filter(Class) filter?: Filter<Class>): Promise<Class[]> {
    return this.classRepository.find(filter);
  }

  @patch('/classes')
  @response(200, {
    description: 'Class PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class, {partial: true}),
        },
      },
    })
    classData: Class,
    @param.where(Class) where?: Where<Class>,
  ): Promise<Count> {
    return this.classRepository.updateAll(classData, where);
  }

  @get('/classes/{id}')
  @response(200, {
    description: 'Class model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Class, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Class, {exclude: 'where'})
    filter?: FilterExcludingWhere<Class>,
  ): Promise<Class> {
    return this.classRepository.findById(id, filter);
  }

  @patch('/classes/{id}')
  @response(204, {
    description: 'Class PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class, {partial: true}),
        },
      },
    })
    classData: Class,
  ): Promise<void> {
    await this.classRepository.updateById(id, classData);
  }

  @put('/classes/{id}')
  @response(204, {
    description: 'Class PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() classData: Class,
  ): Promise<void> {
    await this.classRepository.replaceById(id, classData);
  }

  @del('/classes/{id}')
  @response(204, {
    description: 'Class DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.classRepository.deleteById(id);
  }
}
