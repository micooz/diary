import React, {Component, PropTypes} from 'react';

export class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
  };

  render() {
    const {title, body} = this.props;

    return (
      <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{title}</title>
      </head>
      <body>
      {body}

      {__DEVELOPMENT__ ?
        <script src="/diary/dist/vendor.js"></script> :
        <script src="/diary/dist/vendor.min.js"></script>
      }
      {__DEVELOPMENT__ ?
        <script src="/diary/dist/app.js"></script> :
        <script src="/diary/dist/app.min.js"></script>
      }
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
