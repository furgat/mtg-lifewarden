'use strict'
import React from 'react';

export default class IconButton extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { clickCallback, buttonClass, labelText, iconClass } = this.props;

    return(
      <button
        class={buttonClass}
        onClick={
          (event) => {
            if (typeof clickCallback === 'function') clickCallback();
          }
        }
      >
        <span class={iconClass} aria-label={labelText}></span>
      </button>
      );
  }
}
