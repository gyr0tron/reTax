import React, { Component } from "react";
import Header from "./Header";
import "../../styles/semantic-ui.scss"
import "../../styles/app.scss";

import Head from "next/head";

class Layout extends Component {
  render() {
    return (
      <div>
        <title>{this.props.title}</title>
        <Head>
          {/* <link
            rel='stylesheet'
            href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css'
          /> */}
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
          />
        </Head>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
export default Layout;