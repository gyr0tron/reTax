import React, { Component } from "react";
import Head from "next/head";
import "../../styles/app.scss";
import Header from "./Header";

class Layout extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Head>
          <title>{this.props.title}</title>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
          />
          <link
            rel='stylesheet'
            href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css'
          />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
