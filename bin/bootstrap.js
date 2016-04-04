#!/usr/bin/env node
require('babel-core/register');

const __DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

global.__DEVELOPMENT__ = __DEVELOPMENT__;
global.__PRODUCTION__ = !__DEVELOPMENT__;

if (__DEVELOPMENT__) {
  if (!require('piping')({
      hook: true
    })) {
    return;
  }
}

require('../src/compiler');