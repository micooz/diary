const path = require('path');

const root = function root() {
  return path.resolve.apply(path, [__dirname, ...arguments]);
};

/**
 * configurations
 */
module.exports = {

  /**
   * where to store *.md
   */
  archives: root('archives'),

  /**
   * the base path for deploy
   */
  deploy: root('gh-pages'),

  /**
   * where to store index.html
   */
  homepage: root('gh-pages/index.html'),

  /**
   * where to put compiled static pages (*.html)
   */
  dist: root('gh-pages/-'),

  /**
   * where to store scripts
   */
  static: root('gh-pages/dist'),

  /**
   * whether disable incremental compilation
   */
  force: false

};
