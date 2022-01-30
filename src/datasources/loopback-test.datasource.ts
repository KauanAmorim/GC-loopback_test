import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'loopback_test',
  connector: 'postgresql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  schema: process.env.DB_SCHEMA,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LoopbackEnglishClassDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'loopback_test';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.loopback_test', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
