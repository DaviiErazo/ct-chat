import { Query } from './Query';
import { Response } from './Response';

export interface QueryBus {
  ask<R extends Response>(query: any): Promise<any>;
}
