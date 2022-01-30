import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LoopbackTestDataSource} from '../datasources';
import {StudentClass, StudentClassRelations} from '../models';

export class StudentClassRepository extends DefaultCrudRepository<
  StudentClass,
  typeof StudentClass.prototype.,
  StudentClassRelations
> {
  constructor(
    @inject('datasources.loopback_test') dataSource: LoopbackTestDataSource,
  ) {
    super(StudentClass, dataSource);
  }
}
