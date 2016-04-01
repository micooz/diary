import fs from 'fs';
import marked from 'marked';

/**
 * Asynchronously render the specified Markdown to html string
 * @param file
 * @returns {Promise}
 */
export function render(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (!err) {
        const html = marked(data);
        resolve(html);
        return;
      }
      reject(err);
    });
  });
}
