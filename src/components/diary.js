import React, {Component, PropTypes} from 'react';

export class DiaryComponent extends Component {

  static propTypes = {
    header: PropTypes.string,
    content: PropTypes.string
  };

  highlight = () => {
    const hljs = require('highlight.js');

    const pres = document.getElementsByTagName('pre');
    for (let i = 0, len = pres.length; i < len; ++i) {
      const pre = pres[i];
      const code = pre.getElementsByTagName('code');
      if (code) {
        hljs.highlightBlock(code[0]);
      }
    }
  };

  componentDidMount() {
    require('highlight.js/styles/tomorrow.css');

    document.title = this.props.location.state.header;
    this.highlight();
  }

  render() {
    const {header, content} = this.props.location ? this.props.location.state : this.props;

    return (
      <div>
        <header className="header">
          <h1>{header}</h1>
        </header>
        <div className="diary" dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    );
  }

}
