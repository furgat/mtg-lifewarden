'use strict'
import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.replaceState(null, "/");
  }

  render() {
    return (
      <div class='top-container'>
        {this.props.children}
      </div>
    )
  }
}
