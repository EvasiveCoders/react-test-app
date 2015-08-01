// LIBRARY
import React from 'react';
import { RouteHandler } from 'react-router';

// COMPONENT
import HtmlHeaderTags from '../Document/HtmlHeaderTags';

if (process.env.BROWSER) {
  require('./_App.scss');
  require('file?name=favicon.ico!../../images/favicon.ico');
}

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <HtmlHeaderTags />
        <div id='app' className='main-content'>
          <RouteHandler />
        </div>
      </div>
    );
  }
}

App.prototype.displayName = 'App';
