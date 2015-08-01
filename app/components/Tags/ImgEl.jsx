import React from 'react';


export default class ImgEl extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <img id={this.props.id} className={this.props.className} src={this.props.src} alt={this.props.alt} width={this.props.width} height={this.props.height} />
    )
  }
}

ImgEl.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string,
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
  height: React.PropTypes.string,
  width: React.PropTypes.string
}

ImgEl.prototype.displayName = 'ImgEl';
