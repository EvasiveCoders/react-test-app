import React from 'react';
import AnchorEl from '../Tags/AnchorEl';
import ImgEl from '../Tags/ImgEl';

export default class Repos extends React.Component {
  constructor() {
    super();
  }

  render() {
    if(this.props.repos.length) {
      return (
        <div className="repolist clearfix">
          <p><strong>Repos List:</strong></p>
          <ul>
            {this.props.repos.map(function(repo, i){
              return <li key={repo.id}><AnchorEl href={repo.html_url} target="_blank" text={repo.name} /></li>;
            })}
          </ul>
        </div>
      )
    } else {
      return (
        <div className="repolist clearfix">
          <p>No repos!</p>
        </div>
      )
    }
  }
}

Repos.propTypes = {
  repos: React.PropTypes.array
}

Repos.prototype.displayName = 'Repos';