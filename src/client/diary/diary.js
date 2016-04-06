import React from 'react';
import ReactDOM from 'react-dom';
import http from 'superagent';
import {DiaryComponent} from '../../components/diary';
import './diary.css'

export function DiaryController(location) {
  const {date, filename} = location.state;

  http.get(`${filename}.json`)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        const header = date.toDateString();
        const content = res.body.data;

        ReactDOM.render(
          <DiaryComponent header={header} content={content}/>,
          document.getElementById('app')
        );
      }
    });
}
