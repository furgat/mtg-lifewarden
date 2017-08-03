'use strict'
import React from 'react';

export default class TextButton extends React.Component {
  constructor() {
    super();
    this.state = {
      side : 'NONE'
    }
  }

  render() {
    const { clickCallback, classes, text } = this.props;

    return(
      <button
        class={classes}
        onClick={
          (event) => {
            if (typeof clickCallback === 'function') clickCallback();
          }
        }
      >
        {text}
      </button>
      );
  }
}
