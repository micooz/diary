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
      </body>
      </html>
    );
  }

}
