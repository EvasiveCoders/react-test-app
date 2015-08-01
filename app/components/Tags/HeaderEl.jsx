import React from 'react';


export default class HeaderEl extends React.Component {
  constructor() {
    super();
  }

  render() {
    switch (this.props.level) {
      case 'h1':
        return (<h1 className={this.props.className}>{this.props.text}</h1>)
        break;
      case 'h2':
        return (<h2 className={this.props.className}>{this.props.text}</h2>)
        break;
      case 'h3':
        return (<h3 className={this.props.className}>{this.props.text}</h3>)
        break;
      case 'h4':
        return (<h4 className={this.props.className}>{this.props.text}</h4>)
        break;
      case 'h5':
        return (<h5 className={this.props.className}>{this.props.text}</h5>)
        break;
      case 'h6':
        return (<h6 className={this.props.className}>{this.props.text}</h6>)
        break;
    }
  }
}

HeaderEl.propTypes = {
  className: React.PropTypes.string,
  level: React.PropTypes.string.isRequired,
  text: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ])
}

HeaderEl.prototype.displayName = 'HeaderEl';