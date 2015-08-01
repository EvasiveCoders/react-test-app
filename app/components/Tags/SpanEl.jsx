import React from 'react';


export default class SpanEl extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <span id={this.props.id} className={this.props.className}>{this.props.content}</span>
    )
  }
}

SpanEl.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string,
  content: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ])
}

SpanEl.prototype.displayName = 'SpanEl';
