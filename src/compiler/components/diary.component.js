import React, {Component, PropTypes} from 'react';

export class DiaryComponent extends Component {

  static propTypes = {
    content: PropTypes.string
  };

  render() {
    const {content} = this.props;

    return (
      <div>
        <div>YEAR MONTH DAY</div>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    );
  }

}
