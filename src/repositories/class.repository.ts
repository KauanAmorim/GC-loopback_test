import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LoopbackEnglishClassDataSource} from '../datasources';
import {Class, ClassRelations} from '../models';

export class ClassRepository extends DefaultCrudRepository<
  Class,
  typeof Class.prototype.id,
  ClassRelations
> {
  constructor(
    @inject('datasources.loopback_test')
    dataSource: LoopbackEnglishClassDataSource,
  ) {
    super(Class, dataSource);
  }
}
