import path from 'path';

const root = function root() {
  return path.resolve.apply(path, [__dirname, ...arguments]);
};

/**
 * configurations
 */
export default {

  /**
   * where to store *.md
   */
  archives: root('archives'),

  /**
   * where to put compiled static pages (*.html)
   */
  dist: root('-'),

  /**
   * whether disable incremental compilation
   */
  force: false

};
