import fs from 'fs';
import marked from 'marked';

/**
 * read data from file
 * @param file
 * @returns {Promise}
 */
export function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (!err) {
        resolve(data);
        return;
      }
      reject(err);
    });
  });
}

/**
 * Asynchronously render the specified Markdown to html string
 * @param markdown {string}
 * @returns {Promise}
 */
export function render(markdown) {
  return Promise.resolve(marked(markdown));
}
