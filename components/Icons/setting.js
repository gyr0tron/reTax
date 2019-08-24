import React, { Component } from "react";
import "../../styles/icons/setting.scss"

class Icon extends Component {
  render() {
    return (
      <div className="settings-wrapper circle">
        <div className="arrow-rectangle"></div>
        <div className="arrow-placeholder"></div>
        <div className="arrow-circle"></div>
        <div className="gear">
          <div className="tooth-1"></div>
          <div className="tooth-2"></div>
          <div className="tooth-3"></div>
          <div className="tooth-4"></div>
          <div className="tooth-5"></div>
          <div className="tooth-6"></div>
          <div className="tooth-7"></div>
          <div className="tooth-8"></div>
          <div className="tooth-9"></div>
          <div className="tooth-10"></div>
          <div className="tooth-11"></div>
          <div className="tooth-12"></div>
        </div>
      </div>
    )
  }
}

export default Icon;