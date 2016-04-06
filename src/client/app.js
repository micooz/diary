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
    }
  });
};

window.addEventListener('DOMContentLoaded', () => main());
