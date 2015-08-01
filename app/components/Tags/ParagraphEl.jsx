import React from 'react';


export default class ParagraphEl extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <p className={this.props.className}>{this.props.content}</p>
    )
  }
}

ParagraphEl.propTypes = {
  className: React.PropTypes.string,
  content: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ])
}

ParagraphEl.prototype.displayName = 'ParagraphEl';
