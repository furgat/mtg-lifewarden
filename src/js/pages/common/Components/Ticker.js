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
      console.log('left');
    } else {
      console.log('right');
    }
  }

  render() {
      return(
        <button
          class='{this.props.classes}'
          onClick={this.clickEvent.bind(this)}
        >
          {this.props.text}
        </button>
      );
  }
}
