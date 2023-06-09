import { Framework, Application } from '../src';
import * as FaaS from '../src';
import { join } from 'path';
import { close, create, createFunctionApp } from '../../mock/src';
import { BootstrapStarter } from '../../../packages-serverless/midway-fc-starter/src';

const originReady = FaaS.Configuration.prototype.init;
let isProxy = false;
let currentOptions;

export async function creatStarter(name, options = {}): Promise<Framework> {
  currentOptions = options;
  if (!isProxy) {
    FaaS.Configuration.prototype.init = async function () {
      this.framework.configure(currentOptions);
      await this.framework.initialize(currentOptions);
      await originReady.call(this);
    }
    isProxy = true;
  }

  return await create<Framework>(join(__dirname, 'fixtures/legacy', name), options, FaaS);
}

export async function createNewStarter(name, options = {}): Promise<Application> {
  const basePath = join(__dirname, 'fixtures', name);
  const app = await createFunctionApp<Framework>(basePath, Object.assign({
    starter: new BootstrapStarter(),
    imports: [
      require('../src'),
      require(`${basePath}/src`)
    ]
  }, options));
  return app;
}

export async function closeApp(framework) {
  return close(framework);
}
