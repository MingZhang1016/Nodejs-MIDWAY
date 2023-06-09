import { Configuration } from '../../../../../src';
import { join } from 'path';

@Configuration({
  imports: [
    require('../../midway-plugin-ok')
  ],
  importConfigs: [
    join(__dirname, './config.default'),
    join(__dirname, './config.local')
  ],
})
export class AutoConfiguration {}
