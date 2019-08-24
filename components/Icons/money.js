import React, { Component } from "react";
import "../../styles/icons/money.scss"

class Icon extends Component {
  render() {
    return (
      <div className="circle">
        <img src="/static/img/money.svg" className="money-svg"></img>
      </div>
    )
  }
}

export default Icon;