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

  const pikaday = new Pikaday({
    onSelect: function (date) {
      const time = moment(date);
      if (window.__data.dates[time.format('YYYY-MM-DD')]) {
        // history.push({
        //   pathname: '/diary/-/',
        //   search: time.format('YYYY/MM/YYYY-MM-DD') + '.html'
        // });
        window.location += '-/' + time.format('YYYY/MM/YYYY-MM-DD') + '.html';
      }
    },
    disableDayFn: (date) => {
      const time = moment(date).format('YYYY-MM-DD');
      return window.__data.dates[time] ? false : true;
    },
    i18n: {
      previousMonth: '&lt;&lt;',
      nextMonth: '&gt;&gt;',
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
    // minDate: new Date(window.__data.from),
    // maxDate: new Date(window.__data.to)
  });

  calendar.appendChild(pikaday.el);
};

window.addEventListener('DOMContentLoaded', () => main());
