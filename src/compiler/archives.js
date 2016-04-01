import fs from 'fs';
import path from 'path';

/**
 * Synchronous load archives from specified directory
 * @param from
 */
export function load(from) {

  const dig = (_path) => {
    // files will be stored here
    let list = [];

    // check whether 'from' is a directory
    if (fs.statSync(_path).isDirectory()) {
      const _paths = fs.readdirSync(_path);
      // call this function recursive on each _paths
      for (let p of _paths) {
        const next = path.join(_path, p);
        list = list.concat(dig(next));
      }
    } else {
      // it's a file
      list.push(_path);
    }
    return list;
  };

  return dig(from);
}
