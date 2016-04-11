import routes from './routes';
import ReactDOM from 'react-dom';
import './css/global.css';
import './css/calendar.css';
import './css/diary.css';

const main = () => {
  ReactDOM.render(routes, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', () => main());
