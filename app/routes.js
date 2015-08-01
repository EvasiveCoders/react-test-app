// LIBRARY
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import {Route, DefaultRoute} from 'react-router';

// COMPONENT
import Application from './components/App/App.jsx';
import HomeSection from './components/HomeSection/HomeSection.jsx';

export default (
  <Route name='app' path='/' handler={Application}>
    <Route name='home' path='/home' handler={HomeSection}/>
    <DefaultRoute handler={HomeSection} />
  </Route>
);
