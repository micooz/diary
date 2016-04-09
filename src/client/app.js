import {createHistory} from 'history';
import routes from './routes';
import hljs from 'highlight.js';
import './css/global.css';

const highlight = () => {
  const pres = document.getElementsByTagName('pre');
  for (let i = 0, len = pres.length; i < len; ++i) {
    const pre = pres[i];
    const code = pre.getElementsByTagName('code');
    if (code) {
      hljs.highlightBlock(code[0]);
    }
  }
};

const main = () => {
  const history = createHistory();
  global.__history__ = history;
  global.__highlight__ = highlight;

  history.listen(location => {
    const pathname = location.pathname;

    if (typeof routes[pathname] === 'function') {
      routes[pathname](location);
    } else {
      if (pathname.indexOf('html') !== -1) {
        __highlight__();
        return;
      }
      console.warn('cannot find proper router to ' + pathname);
    }
  });
};

window.addEventListener('DOMContentLoaded', () => main());
