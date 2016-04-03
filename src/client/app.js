import Pikaday from 'pikaday';
import moment from 'moment';
// import {createHistory} from 'history';
import './css/global.css';
import './css/calendar.css';
import './css/diary.css'

// const history = createHistory();

const main = () => {
  const calendar = document.getElementById('calendar');

  if (!calendar) {
    return;
  }

  const lastDate = new Date(calendar.getAttribute('data-last-date'));
  const firstDate = new Date(calendar.getAttribute('data-first-date'));

  const pikaday = new Pikaday({
    onSelect: function (date) {
      const time = moment(date);
      // history.push({
      //   pathname: '/diary/-/',
      //   search: time.format('YYYY/MM/YYYY-MM-DD') + '.html'
      // });
      window.location += '-/' + time.format('YYYY/MM/YYYY-MM-DD') + '.html';
    },
    i18n: {
      previousMonth: '&lt;&lt;',
      nextMonth: '&gt;&gt;',
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    minDate: firstDate,
    maxDate: lastDate
  });

  calendar.appendChild(pikaday.el);
};

window.addEventListener('DOMContentLoaded', () => main());
