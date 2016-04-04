import React, {Component, PropTypes} from 'react';

export class DiaryComponent extends Component {

  static propTypes = {
    content: PropTypes.string
  };

  render() {
    const {header, content} = this.props;

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
