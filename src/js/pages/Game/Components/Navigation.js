'use strict'
import React from "react";
import {Link} from "react-router";

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      nav: {
        activeClass: "btn-active",
        defaultClass: "btn btn-default",
        navElements: [
          {
            to: '/config',
            title: 'back',
          }
        ]
      }
    };
  }

  render() {
    var links = [];
    const {activeClass, defaultClass, navElements} = this.state.nav;

    for(var element in navElements) {
      links.push(
        <Link activeClassName={activeClass} to={element.to}>
          <button class={defaultClass}>
            {element.title}
          </button>
        </Link>
      );
    }

    return (
      <nav>
        {links}
      </nav>
    )
  }
}
