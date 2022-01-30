import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LoopbackTestDataSource} from '../datasources';
import {Student, StudentRelations} from '../models';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.id,
  StudentRelations
> {
  constructor(
    @inject('datasources.loopback_test') dataSource: LoopbackTestDataSource,
  ) {
    super(Student, dataSource);
  }
}
