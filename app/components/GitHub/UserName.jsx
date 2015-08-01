import React from 'react';
import AnchorEl from '../Tags/AnchorEl.jsx';
import SpanEl from '../Tags/SpanEl.jsx';

export default class UserName extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.fullName || this.props.userName} <SpanEl className="smallname" content={
          <AnchorEl prefix="(@" postfix=")" href={this.props.profileUrl} target="_blank" text={this.props.userName} />
        } />
      </div>
    )
  }
}

UserName.propTypes = {
  profileUrl: React.PropTypes.string,
  fullName: React.PropTypes.string,
  userName: React.PropTypes.string,
}

UserName.prototype.displayName = 'UserName';