import React from 'react';
import ReactDOM from 'react-dom/server';
import {Html} from './html';

/**
 * Asynchronously put content to Html component
 * @param content
 * @returns {Promise}
 */
export function assemble(content) {
  return new Promise((resolve, reject) => {
    resolve(ReactDOM.renderToStaticMarkup(<Html content={content}/>));
  });
}
