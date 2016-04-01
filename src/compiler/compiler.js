import path from 'path';
import * as Archives from './archives';
import * as Render from './render';
import * as Assembler from './assembler';
import * as Dump from './dump';

export class Compiler {

  run(config, callback) {
    const archPath = config.archives;

    const files = Archives.load(archPath);

    for (let file of files) {
      const filename = path.basename(file);

      // matches is an array of year, month and day
      // e.g. ['2016-01-01', '2016', '01', '01']
      const matches = /^(\d{4})\-(\d{2})\-(\d{2})\.md$/.exec(filename);

      if (matches) {
        const year_month = matches.splice(1, matches.length);
        year_month.pop();

        const html_filename = filename.split('.')[0] + '.html';
        const saveTo = path.join(config.dist, ...[...year_month, html_filename]);

        Render.render(file)
          .then(content => Assembler.assemble(content))
          .then(page => Dump.dump(page, saveTo))
          .then(() => callback(null))
          .catch(err => console.error(err));
      } else {
        console.error(`'${filename}' is not a valid file name`);
      }
    }
  }

}
