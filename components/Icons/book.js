import React, { Component } from "react";
import "../../styles/icons/book.scss"

class Icon extends Component {
  render() {
    return (
      <div className="circle">
        <div className="animated-book ml-1 mt-3">
          <div className="book-cover"></div>
          <div className="page"></div>
        </div>
      </div>
    )
  }
}

export default Icon;
