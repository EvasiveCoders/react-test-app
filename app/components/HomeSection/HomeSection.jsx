// LIBRARY
import React from 'react';

// FLUX
import AppStore from '../../stores/AppStore';
import HomeSectionActions from './HomeSectionActions.jsx';
import connectToStores from 'alt/utils/connectToStores';

import HeaderEl from '../Tags/HeaderEl.jsx';
import ButtonEl from '../Tags/ButtonEl.jsx';
import InputEl from '../Tags/InputEl.jsx';
import ParagraphEl from '../Tags/ParagraphEl.jsx';
import DivEl from '../Tags/DivEl.jsx';

import GitHub from '../GitHub/GitHub.jsx';

if (process.env.BROWSER) {
  require('./_HomeSection.scss');
}

let homeSection = class HomeSection extends React.Component {
  constructor() {
    super();
  }

  render() {
    // retrieve data from store
    let storeProps = HomeSection.getPropsFromStores();

    return (
      <div id="w">
        <HeaderEl level="h1" text="Simple Github API Webapp" />
        <ParagraphEl content="Enter a single Github username below and click the button to display profile info via JSON." />

        <HomeSectionActions />

        <DivEl className="ghapidata" content={<GitHub userName={storeProps.userName} appState={storeProps.appState} apiData={storeProps.apiData}/>} />
      </div>
    );
  }


  static getStores() {
    return [AppStore];
  }

  static getPropsFromStores() {
    return {
      apiData: AppStore.getState().get('dataByRestApi').toJS(),
      appState: AppStore.getState().get('appState').toJS(),
      userName: AppStore.getState().get('userName').toJS()
    };
  }
};

homeSection.prototype.displayName = 'HomeSection';

export default connectToStores(homeSection);
