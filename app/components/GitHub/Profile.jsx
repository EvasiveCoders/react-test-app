import React from 'react';
import AnchorEl from '../Tags/AnchorEl';
import ImgEl from '../Tags/ImgEl';

export default class Profile extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="ghcontent">
        <div className="avi">
          <AnchorEl href={this.props.profileUrl} target="_blank" text={
            <ImgEl src={this.props.avatar} width="80" height="80" alt={this.props.userName} />
          } />
        </div>
        <p>
          Followers: {this.props.followers} - Following: {this.props.following}<br />
          Repos: {this.props.repoCount}
        </p>
      </div>
    )
  }
}

Profile.propTypes = {
  avatar: React.PropTypes.string,
  followers: React.PropTypes.number,
  following: React.PropTypes.number,
  fullName: React.PropTypes.string,
  location: React.PropTypes.string,
  profileUrl: React.PropTypes.string,
  repoCount: React.PropTypes.number,
  userName: React.PropTypes.string
}

Profile.prototype.displayName = 'Profile';