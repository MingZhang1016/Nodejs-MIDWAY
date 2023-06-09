import { saveModule } from '@midwayjs/core';
import { Connection } from 'typeorm';
import { ConnectionOptions } from './interface';

export const ORM_HOOK_KEY = '__orm_hook_for_configuration__';

export interface OrmConnectionHook {
  beforeCreate?(opts?: ConnectionOptions): Promise<ConnectionOptions>;
  afterCreate?(
    conn?: Connection,
    opts?: ConnectionOptions
  ): Promise<Connection>;
  beforeClose?(conn?: Connection, connectionName?: string): Promise<Connection>;
  afterClose?(conn?: Connection): Promise<Connection>;
}

export function OrmHook(): ClassDecorator {
  return function (target) {
    if (typeof target === 'function') {
      saveModule(ORM_HOOK_KEY, target);
    } else {
      saveModule(ORM_HOOK_KEY, (target as any).constructor);
    }
  };
}
