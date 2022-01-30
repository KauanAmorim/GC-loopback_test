import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LoopbackTestDataSource} from '../datasources';
import {StudentClassView, StudentClassViewRelations} from '../models';

export class StudentClassViewRepository extends DefaultCrudRepository<
  StudentClassView,
  typeof StudentClassView.prototype.classId,
  StudentClassViewRelations
> {
  constructor(
    @inject('datasources.loopback_test') dataSource: LoopbackTestDataSource,
  ) {
    super(StudentClassView, dataSource);
  }
}
