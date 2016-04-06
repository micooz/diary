import React from 'react';
import ReactDOM from 'react-dom';
import {HomeComponent} from '../../components/home';
import './calendar.css';

export function HomeController(location) {
  if (!window.__data) {
    window.location.reload();
    return;
  }

  ReactDOM.render(<HomeComponent/>, document.getElementById('app'));
}
