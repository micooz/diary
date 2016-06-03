# diary

Track of everything in your life. It's not only a diary but also a `github pages` generator. :beer:

## Features

* a calendar powered by [Pikaday](https://github.com/dbushell/Pikaday)
* code highlight powered by [highlight.js](https://github.com/isagalaev/highlight.js)
* incremental compile `*.md` to `*.html`
* universal rendering
* SEO friendly

## Installation

Install everything you need:

    $ npm i

## Usage

1. configure paths through `config.js`.
2. write your diaries in Markdown, save them to `archives`.
3. issue `$ npm run build:prod`.
4. deploy via `$ npm run deploy`

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

## Deploy

To deploy a static site to `gh-pages`, just:

    $ npm run deploy

## RoadMap

- [x] **dev**: add a dev server
- [x] **calendar**: only link days which have diary
- [x] **page**: switch among pages without refresh
- [x] **diary**: beautify
- [x] **diary**: highlight code
- [x] **compiler**: incremental compilation
- [x] **deploy**: scripts to deploy github pages

## Author

Micooz

## LICENSE

MIT