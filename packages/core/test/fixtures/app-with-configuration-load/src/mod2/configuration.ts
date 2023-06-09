import { Configuration } from '../../../../../src';
import { join } from "path";

@Configuration({
  importConfigs: [
    join(__dirname, 'config.default')
  ],
  namespace: 'mod2'
})
export class Mod2Configuration {}
