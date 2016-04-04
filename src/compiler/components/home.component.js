import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import serialize from 'serialize-javascript';

export class HomeComponent extends Component {

  static propTypes = {
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date)
  };
  
  render() {
    return (
      <div>
        <header className="header"><h1>Diary</h1></header>
        <div className="content">
          <div id="calendar"></div>
        </div>
        <footer className="footer">
          <address className="author">
            Calendar designed by
            <a rel="author" href="https://github.com/joyeecheung" className="author-name">Joyee Cheung</a>
          </address>
          <br/>
          <p>
            Generated by&nbsp;
            <a href="https://github.com/micooz/diary" className="site-repo">Micooz&#39;s diary compiler</a>
          </p>
        </footer>

        <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(this.props)};`}}></script>
      </div>
    );
  }

}
