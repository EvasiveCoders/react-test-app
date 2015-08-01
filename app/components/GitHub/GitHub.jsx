import React from 'react';
import DivEl from '../Tags/DivEl';
import HeaderEl from '../Tags/HeaderEl';
import ImgEl from '../Tags/ImgEl';
import UserName from './UserName';
import Profile from './Profile';
import Repos from './Repos';

// FLUX
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
let { PropTypes } = React;

export default class GitHub extends React.Component {
  constructor() {
    super();
    this.propsTypes = {
      apiData: PropTypes.object.isRequired,
      appState: PropTypes.object.isRequired,
      userName: PropTypes.string.isRequired
    };
  }

  render() {
    // let data = this.props.apiData[this.props.userName];
    let data = GitHub.getPropsFromStores();
    let loadState = this.props.appState.state;
    if(loadState === 'repos') {
      if(typeof(data.apiData[data.userName.value]) === 'undefined') {
        loadState = 'loading';
      }
    }

    if(data) {
      switch (loadState) {

        case 'loading':
            return (
              <div>
                <DivEl id="loader" content={
                  <ImgEl src="/images/loader.gif" alt="loading..." />
                } />
              </div>
            )
          break;

        case 'repos':
          let userData = data.apiData[data.userName.value];
            return (
              <div>
                <HeaderEl level="h2" text={
                  <UserName 
                    fullName={userData.info.name} 
                    profileUrl={userData.info.html_url} 
                    userName={userData.info.login} />
                } />
                <Profile 
                  avatar={userData.info.avatar_url} 
                  followers={userData.info.followers} 
                  following={userData.info.following} 
                  fullName={userData.info.name} 
                  location={userData.info.location} 
                  profileUrl={userData.info.html_url} 
                  repoCount={userData.info.public_repos} 
                  userName={userData.info.login} />
                <Repos 
                  repos={userData.repos} />
              </div>
            )
          break;

        case 'error':
            return (
              <div>
                <DivEl content={<HeaderEl level="h2" text="No User Info Found" />} />
              </div>
            )
          break;

        default:
          return (
            <div>
              <DivEl id="gh-empty" />
            </div>
          )
          break;
      }
    } else {
      return (
        <div>
          <DivEl id="gh-empty" />
        </div>
      )
    }
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
}

GitHub.prototype.displayName = 'GitHub';
