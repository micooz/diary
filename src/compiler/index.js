import {Compiler} from './compiler';
import config from '../../config';

const app = new Compiler(config);

app.run();
