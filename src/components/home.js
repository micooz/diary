import React, {Component} from 'react';
import moment from 'moment';

export class HomeComponent extends Component {

  /**
   * trigger when a day is clicked
   * @param date
   */
  onSelect = (date) => {
    const time = moment(date);
    const year_month_day = time.format('YYYY-MM-DD');

    if (window.__data.dates[year_month_day]) {
      __history__.push({
        pathname: '/-/',
        search: time.format('YYYY/MM/YYYY-MM-DD') + '.html',
        state: {
          filename: year_month_day,
          date: date
        }
      });
    }
  };

  componentDidMount() {
    const Pikaday = require('pikaday');

    const calendar = document.getElementById('calendar');

    // initialize pikaday
    const pikaday = new Pikaday({
      onSelect: (date) => this.onSelect(date),
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
    });

    calendar.appendChild(pikaday.el);
  }

  render() {
    return (
      <div>
        <header className="header"><h1>Diary</h1></header>
        <div className="content">
          <div id="calendar"></div>
        </div>
        <footer className="footer">
          <address className="author">
            Calendar designed by
            <a rel="author" href="https://github.com/joyeecheung" className="author-name">Joyee Cheung</a>
          </address>
          <br/>
          <p>
            Generated by&nbsp;
            <a href="https://github.com/micooz/diary" className="site-repo">Micooz&#39;s diary compiler</a>
          </p>
        </footer>
      </div>
    );
  }

}
