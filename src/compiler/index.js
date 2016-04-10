import {Compiler} from './compiler';
import config from '../../config';

const additions =
  process.argv.some(argv => argv === '-f') ? {
    force: true
  } : null;

const configs = Object.assign({}, config, additions);

const app = new Compiler(configs);

app.run();
