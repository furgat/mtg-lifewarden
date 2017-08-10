'use strict'
import React from 'react';

export default class Ticker extends React.Component {
  constructor() {
    super();
    this.state = {
      side : 'NONE'
    }
  }

  clickEvent(event) {
    const element = event.target;
    var left = element.offsetLeft;
    var x = event.clientX;
    var midPoint = (element.offsetWidth / 2);

    if ((x - left) < midPoint) {
      return -1;
    } else {
      return 1;
    }
  }

  render() {
    const { clickCallback } = this.props;

    return(
      <button
        class='{this.props.classes}'
        onClick={(event) => {
          const value = this.clickEvent(event);

          if (typeof clickCallback === 'function') {
            clickCallback(value);
          }
        }}
      >
        {this.props.text}
      </button>
    );
  }
}
