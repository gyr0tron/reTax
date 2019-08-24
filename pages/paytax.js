import React, { Component } from "react";
import Layout from "./../components/Layouts/Layouts";
export default class BillPlanNew extends Component {
  state = {
    minimumTax: 0.05
  };
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Layout title='Bills | Plans'>
        <section style={{ paddingTop: 100 }} className="section-rt">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="rt-title">
                  <div className='rt-title-logo'>
                    <img className="img-fluid" src="/static/img/money.svg" alt="Bill"></img>
                  </div>
                  <div className='rt-title-text'>Tax payment</div>
                </div>
                <div className="rt-subtitle">
                  For registering yourself as a <strong>Voter</strong> you need to pay the minimum tax assigned to you.
                </div>
              </div>
            </div>
            <div className="row">
              {this.state.taxInput}
              <div className="col-md-12">
                <div>
                  <strong>Minimum Tax: {this.state.minimumTax}</strong> Ether
                </div>
                <input className="form-control" type="text" />
                <div>
                  <button className="btn btn-rt primary">Pay</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}