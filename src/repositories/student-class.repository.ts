import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LoopbackEnglishClassDataSource} from '../datasources';
import {StudentClass, StudentClassRelations} from '../models';

export class StudentClassRepository extends DefaultCrudRepository<
  StudentClass,
  typeof StudentClass.prototype.classId,
  StudentClassRelations
> {
  constructor(
    @inject('datasources.loopback_test')
    dataSource: LoopbackEnglishClassDataSource,
  ) {
    super(StudentClass, dataSource);
  }
}
