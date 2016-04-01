import fs from 'fs';
import path from 'path';

/**
 * Synchronously mkdir recursively
 * @param directory
 */
const mkdir = (directory) => {
  const parts = directory.split(path.sep);

  let current = '';
  // ignore first element
  for (let i = 1, len = parts.length; i < len; ++i) {
    current = path.join(path.sep + current, parts[i]);
    try {
      fs.mkdirSync(current);
    } catch (err) {
      if (err && err.errno === -17) {
        // just ignore 'file already exists' error
      } else {
        console.error(err);
      }
    }
  }
};

/**
 * Asynchronously dump html page to filesystem
 * @param page
 * @param destination
 */
export function dump(page, destination) {
  // make sure directory exist
  mkdir(path.dirname(destination));

  fs.writeFile(destination, page, (err) => {
    if (err) {
      console.error(err);
    }
  });
}
