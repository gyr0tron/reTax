import React, { Component } from "react";
import Layout from "./../../components/Layouts/Layouts";
export default class BillPlanNew extends Component {
  state = {
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
                    <img className="img-fluid" src="/static/img/bill.png" alt="Bill"></img>
                  </div>
                  <div className='rt-title-text'>Tax payment</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}