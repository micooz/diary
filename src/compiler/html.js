import React, {Component, PropTypes} from 'react';
import serialize from 'serialize-javascript';

export class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    __data: PropTypes.object
  };

  render() {
    const {title, body, __data} = this.props;

    return (
      <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{title}</title>
        {__DEVELOPMENT__ ?
          <script src="/dist/vendor.js"></script> :
          <script src="/dist/vendor.min.js"></script>
        }
        {__DEVELOPMENT__ ?
          <script src="/dist/app.js"></script> :
          <script src="/dist/app.min.js"></script>
        }
      </head>
      <body>
      <div id="app">{body}</div>

      {__data ?
        <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(__data)};`}}></script>
        : null}

      {__PRODUCTION__ ?
        <script dangerouslySetInnerHTML={{__html: `
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-72182315-2', 'auto');
          ga('send', 'pageview');
      `}}>
        </script> : null}
      </body>
      </html>
    );
  }

}
