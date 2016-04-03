import React, {Component, PropTypes} from 'react';

export class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
  };

  render() {
    const {title, body} = this.props;

    return (
      <html lang="">
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{title}</title>
      </head>
      <body>
      {body}

      {__DEVELOPMENT__ ?
        <script src="/vendor.js"></script> :
        <script src="/diary/dist/vendor.min.js"></script>
      }
      {__DEVELOPMENT__ ?
        <script src="/app.js"></script> :
        <script src="/diary/dist/app.min.js"></script>
      }
      </body>
      </html>
    );
  }

}
