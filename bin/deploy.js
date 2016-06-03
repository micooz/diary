const ghpages = require('gh-pages');
const config = require('../config');

const basePath = config.deploy;
const options = {
  repo: 'git@github.com:micooz/diary.git',
  message: 'chore(gh-pages): publish to branch gh-pages'
};
const callback = function (err) {
  if (err) {
    console.error(err);
  }
};

ghpages.publish(basePath, options, callback);
