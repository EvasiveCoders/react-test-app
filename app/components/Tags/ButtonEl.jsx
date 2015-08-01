import React from 'react';


export default class ButtonEl extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <button onClick={this.props.handleClick} className={this.props.className} disabled={this.props.disabled}>{this.props.text}</button>
    )
  }
}

ButtonEl.propTypes = {
  className: React.PropTypes.string,
  text: React.PropTypes.string,
  disabled: React.PropTypes.string
}

ButtonEl.prototype.displayName = 'ButtonEl';