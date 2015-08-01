import React from 'react';


export default class DivEl extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.className}>{this.props.content}</div>
    )
  }
}

DivEl.propTypes = {
  className: React.PropTypes.string,
  content: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]),
  id: React.PropTypes.string,
}

DivEl.prototype.displayName = 'DivEl';