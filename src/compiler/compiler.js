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
      // 2016-01-01.md
      const filename = path.basename(file);

      // matches is an array of year, month and day
      // e.g. ['2016-01-01', '2016', '01', '01']
      const matches = /^(\d{4})\-(\d{2})\-(\d{2})\.md$/.exec(filename);

      if (matches && matches.length >= 4) {
        // ['2016', '01', '01']
        const year_month_day = [matches[1], matches[2], matches[3]];

        // ['2016', '01']
        const year_month = [year_month_day[0], year_month_day[1]];

        // 2016-01-01.html
        const html_filename = filename.replace(/(\w+)\.md$/, '$1.html');

        // path/to/2016-01-01.html
        const saveTo = path.join(config.dist, ...[...year_month, html_filename]);

        const date = new Date(year_month_day.join('-'));
        Render.render(file)
          .then(content => Assembler.assemble({
            title: date.toDateString(),
            content: content
          }))
          .then(page => Dump.dump(page, saveTo))
          .then(() => callback(null))
          .catch(err => console.error(err));
      } else {
        console.error(`'${filename}' is not a valid file name`);
      }
    }
  }

}
