import React from "react";

export default class Robin extends React.Component {
  render() {
    const {query} = this.props.location;
    return (
      <div>
        <h2>ROBIN</h2>
        ({query.description})
      </div>
    )
  }
}
