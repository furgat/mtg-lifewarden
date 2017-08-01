import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.replaceState(null, "/");
  }

  render() {
    return (
      <div>
        <h1>Meet the Team!</h1>
        <Link activeClassName="btn-active" to="/"><button class="btn btn-default">welcome</button></Link>
        <Link activeClassName="btn-active" to="felix/a_warning"><button class="btn btn-default">felix</button></Link>
        <Link activeClassName="btn-active" to="robin?description=a%20cutie"><button class="btn btn-default">robin</button></Link>
        <Link activeClassName="btn-active" to="tony"><button class="btn btn-default">tony</button></Link>
        <div class="well">
          {this.props.children}
        </div>
      </div>
    )
  }
}
