# diary

Track of everything in your life. It's not only a diary but also a `github pages` generator. :beer:

**NOTE:**

> It is under construction now, but PR welcome!

## Features

* a calendar powered by [Pikaday](https://github.com/dbushell/Pikaday)
* generate `*.md` to `*.html`

## Installation

Install everything you need:

    $ npm i

## Usage

1. write your diaries in Markdown, save them to `archives`.
2. issue `$ npm run compile`.
3. check out static html files in your `-`.

## Development

Auto-compile after any changes:

    $ npm run compile:dev

We can make use of `webpack-dev-server` to setup our devServer:

    $ npm run dev:server
    
All in one command:

    $ npm run dev

## Production

In production, we need transform `*.md` to `*.html`, compile all scripts and bundle them into single file.
To do these, just issue:

    $ npm run build:prod

## RoadMap

- [x] **dev**: add a dev server
- [x] **calendar**: only link days which have diary
- [x] **page**: switch among pages without refresh
- [x] **diary**: beautify
- [ ] **diary**: highlight code
- [ ] **deploy**: scripts to deploy github pages

## Author

Micooz

## LICENSE

MIT