import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import http from 'superagent';
import {HomeComponent} from '../components/home';
import {DiaryComponent} from '../components/diary';

const fetchMetadata = (nextState, replace, cb) => {
  const {date, filename} = nextState.location.state;

  http.get(`${filename}.json`)
    .end((err, res) => {
      if (err) {
        console.error(err);
      } else {
        const header = new Date(date).toDateString();
        const content = res.body.data;
        //
        nextState.location.state = {header, content};
        cb();
      }
    });
};

const checkData = (nextState, replace, cb) => {
  if (!window.__data) {
    window.location.reload();
  }
  cb();
};

export default (
  <Router history={browserHistory}>

    <Route onEnter={checkData}>
      <Route path="/" component={HomeComponent}/>
      <Route path="/index.html" component={HomeComponent}/>
    </Route>

    <Route onEnter={fetchMetadata}>
      <Route path="/-/*" component={DiaryComponent}/>
    </Route>

    <Route path="*" component={HomeComponent}/>
  </Router>
);
