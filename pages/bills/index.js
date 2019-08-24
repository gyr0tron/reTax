import React, { Component } from "react";
import Layout from "./../../components/Layouts/Layouts";
export default class Bill extends Component {
  state = {
  };
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Layout title='Bill'>
        <section style={{ paddingTop: 100 }} className="section-rt">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="rt-title">
                  <div className='rt-title-logo'>
                    <img className="img-fluid" src="/static/img/bill.png" alt="Bill"></img>
                  </div>
                  <div className='rt-title-text'>Bill information</div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-rt">
                  Note: Before you vote, carefully go through the description and the attached files. They will make sure you make the best decision.
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}