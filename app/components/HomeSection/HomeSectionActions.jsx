// LIBRARY
import React from 'react';

//DEPS
import ButtonEl from '../Tags/ButtonEl.jsx';
import InputEl from '../Tags/InputEl.jsx';
import Immutable from 'immutable';

// FLUX
import AppActions from '../../actions/AppActions';

export default class HomeSectionActions extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: null,
      disabled: ''
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this._onChange.bind(this)}>
          <InputEl handleChange={this._onChange.bind(this)} placeholder="Github username..." name="ghusername" className="gh-button" />
          <ButtonEl handleClick={this._onClick.bind(this)} text="Pull User Data" handler="search" className="gh-submit-btn" disabled={this.state.disabled} />
        </form>
      </div>
    );
  }

  _onChange(event) {
    event.preventDefault();
    let nameVal = event.target.value;
    if(nameVal === '') {
      this.setState({ disabled: 'disabled' });
    } else {
      this.setState({ disabled: '' });
      this.setState({ userName: event.target.value });
    }
  }

  _onClick() {
    if(this.state.userName !== '' && this.state.userName !== null) {
      AppActions.fetch(this.state.userName);
    }
  }

}

HomeSectionActions.prototype.displayName = 'HomeSectionActions';
