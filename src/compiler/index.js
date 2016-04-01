import {Compiler} from './compiler';
import config from '../../config';

const app = new Compiler();

app.run(config, (err) => {
  if (!err) {
    console.log('done.');
  }
});
