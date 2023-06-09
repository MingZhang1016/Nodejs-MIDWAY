import { Configuration } from '@midwayjs/core';
import * as sequelize from '../../../../src';
import * as path from 'path'

@Configuration({
  imports: [sequelize],
  conflictCheck: true,
  importConfigs: [path.join(__dirname, 'config')]
})
export class ContainerLifeCycle {
}
