import {
  IConfigurationOptions
} from '@midwayjs/core';
import { Application as FaaSApplication, Context as FaaSContext } from '@midwayjs/faas';

export interface Application extends FaaSApplication {
  use: any;
  getServerlessInstance<T>(cls: any): Promise<T>;
}

export interface IServerlessAppOptions extends IConfigurationOptions {
  port?: string | number;
  ssl?: boolean;
  https?: { key: string; cert: string };
  initContext?: any;
  bodyParserLimit?: string;
}

export interface Context extends FaaSContext {}
