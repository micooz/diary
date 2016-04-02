import React from 'react';
import ReactDOM from 'react-dom/server';
import {Html} from './html';

/**
 * Asynchronously put content to Html component
 * @param props
 * @returns {Promise}
 */
export function assemble(props) {
  return new Promise((resolve, reject) => {
    resolve(ReactDOM.renderToStaticMarkup(<Html {...props}/>));
  });
}
