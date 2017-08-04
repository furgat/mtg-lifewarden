'use strict';
import React from 'react';

export default class TextInput extends React.Component {
  constructor() {
    super();
    this.state = {valid: false, locked: false};
  }

  updState(id, val) {
    this.state[id] = val;
  }

  getState() { return this.state.valid; }

  lock() { this.updState('locked', true); }

  unlock() { this.updState('locked', false); }

  render() {
    const {classes, valid, invalid, regex, changeCallback, value} = this.props;

    return (
      <input
        type='text'
        class={classes + ' ' + (this.state.valid ? valid : invalid)}
        onChange={
          (event) => {
            if (!regex)
              this.setState({valid: true});
            else
              this.setState({valid:regex.test(event.target.value)});

            if (typeof changeCallback === 'function') {
              changeCallback(event.target.value, this.state.valid);
            }
          }
        }
        value={value}
      />
    )
  }
}
