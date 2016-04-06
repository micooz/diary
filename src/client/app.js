import {createHistory} from 'history';
import routes from './routes';
import './css/global.css';

const main = () => {
  const history = createHistory();
  global.__history__ = history;

  history.listen(location => {
    const pathname = location.pathname;

    if (typeof routes[pathname] === 'function') {
      routes[pathname](location);
    } else {
      if (pathname.indexOf('html') !== -1) {
        return;
      }
      console.warn('cannot find proper router to ' + pathname);
    }
  });
};

window.addEventListener('DOMContentLoaded', () => main());
