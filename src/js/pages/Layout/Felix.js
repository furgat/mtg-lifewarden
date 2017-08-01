import React from "react";

export default class Felix extends React.Component {
  render() {
    const {params} = this.props;
    return (
      <div>
        <h2>FELIX</h2>
        ({params.warn})
      </div>
    )
  }
}
