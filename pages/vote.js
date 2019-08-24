import React, { Component } from "react";
import Layout from "./../components/Layouts/Layouts";
class Support extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout title='Welcome to reTax'>
        <section style={{paddingTop:100}}>
          <div className="container">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="card col-sm-12 col-md-10 col-lg-8">
                    
                  </div>
                  <div className="col-sm-4">
                    <img id='logo' src='/static/img/voice.svg' style={{margin:15}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
export default Query;
