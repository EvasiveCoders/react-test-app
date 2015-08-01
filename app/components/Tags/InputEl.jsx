import React from 'react';


export default class InputEl extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <input onChange={this.props.handleChange} type={this.props.type} name={this.props.name} id={this.props.id} className={this.props.className} placeholder={this.props.placeholder} />
    )
  }
}

InputEl.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string
}

InputEl.prototype.displayName = 'InputEl';
