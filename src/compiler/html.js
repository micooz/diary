import React, {Component, PropTypes} from 'react';

export class Html extends Component {

  static propTypes = {
    content: PropTypes.string
  };

  render() {
    const {title, content} = this.props;

    return (
      <html lang="">
      <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{title}</title>
      </head>
      <body>
      <div dangerouslySetInnerHTML={{__html: content}}></div>
      </body>
      </html>
    );
  }

}
