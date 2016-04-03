import {Compiler} from './compiler';
import config from '../../config';

const app = new Compiler();

app.run(config, (err, file) => {
  if (!err) {
    console.log(`==> [compiler] compiled ${file}`);
  }
});
