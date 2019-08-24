import React, { Component } from "react";
import "../../styles/icons/vote.scss"

class Icon extends Component {
  render() {
    return (
      <div className="circle">
        <div className="mask-a mask-background">
          <div className="hand"></div>
          <div className="hand-1"></div>
          <div className="hand-2"></div>
        </div>
        <div className="mask-b">
          <div className="hand"></div>
          <div className="hand-1"></div>
        </div>
      </div>
    )
  }
}

export default Icon;