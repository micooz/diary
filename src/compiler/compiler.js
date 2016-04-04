import React from 'react';
import path from 'path';
import moment from 'moment';
import * as Archives from './archives';
import * as Render from './render';
import * as Assembler from './assembler';
import * as Dump from './dump';
import {HomeComponent} from './components/home.component';
import {DiaryComponent} from './components/diary.component';

export class Compiler {

  config = undefined;

  homePage = path.resolve(__dirname, '../../index.html');

  constructor(config) {
    this.config = config;
  }

  run() {
    const archPath = this.config.archives;
    const markdowns = Archives.load(archPath);

    let dates = [];
    for (let md of markdowns) {
      const date = this.makeDiaryPage(md);
      if (date) {
        dates.push(date);
      }
    }
    dates.sort((d1, d2) => d1.getTime() - d2.getTime());

    if (dates.length > 0) {
      const _data = {
        from: dates[0],
        to: dates[dates.length - 1],
        dates: this._index(dates, date => moment(date).format('YYYY-MM-DD'))
      };
      this.makeHomePage(_data);
    }
  }

  /**
   * render the markdown file into html and return the date of markdown
   * @param markdown
   * @returns {Date|null}
   */
  makeDiaryPage(markdown) {
    // 2016-01-01.md
    const filename = path.basename(markdown);

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
      const saveTo = path.join(this.config.dist, ...[...year_month, html_filename]);

      // 2016-01-01
      const date_str = year_month_day.join('-');
      const date = new Date(date_str);

      // render every diary
      Render.render(markdown)
        .then(content => Assembler.assemble({
          title: date.toDateString(),
          body: <DiaryComponent content={content}/>
        }))
        .then(page => Dump.dump(page, saveTo))
        .then(() => console.log(`==> [diary] compiled ${html_filename}`))
        .catch(err => console.error(err));

      return date;
    } else {
      console.error(`'${filename}' is not a valid file name`);
    }
  }

  /**
   * generate homepage
   * @param options
   */
  makeHomePage(options = {from: 0, to: 0, dates: {}}) {
    if (options.from > 0 && options.to > 0) {
      const saveTo = this.homePage;

      Assembler.assemble({
          title: 'Diary Home',
          body: <HomeComponent {...options}/>
        })
        .then(page => Dump.dump(page, saveTo))
        .then(() => console.log(`==> [homepage] generated at ${saveTo}`))
        .catch(err => console.error(err));
    }
  }

  /**
   * generate index of an array
   * @param arr
   * @param fn a callback function which should return a key of every element
   * @returns {{}} the index object
   * @private
   *
   * @example
   *
   * const arr = [{id: 1, data: '1'}, {id: 2, data: '2'}];
   * const index_of_arr = _index(arr, ele => ele.id);
   *
   * result:
   *
   *   {
   *     1: {id: 1, data: '1'},
   *     2: {id: 2, data: '2'}
   *   }
   *
   */
  _index(arr, fn) {
    let indexes = {};
    for (let it of arr) {
      const key = fn(it);
      if (!indexes[key]) {
        indexes[key] = {};
      }
      indexes[key] = it;
    }
    return indexes;
  }

}
