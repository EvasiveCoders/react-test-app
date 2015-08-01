import React from 'react';


export default class AnchorEl extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <a href={this.props.href} id={this.props.id} className={this.props.className} target={this.props.target}>{this.props.prefix}{this.props.text}{this.props.postfix}</a>
    )
  }
}

AnchorEl.propTypes = {
  className: React.PropTypes.string,
  href: React.PropTypes.string,
  id: React.PropTypes.string,
  target: React.PropTypes.string,
  text: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ])
}

AnchorEl.prototype.displayName = 'AnchorEl';