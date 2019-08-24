import React, { Component } from "react";
import Layout from "./../../../components/Layouts/Layouts";
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
            <div className="text-left" style={{cursor: 'pointer'}}>Back</div>
            <div className="row">
              <div className="col-md-12">
                <div className="rt-title">
                  <div className='rt-title-logo'>
                    <img className="img-fluid" src="/static/img/bill.png" alt="Bill"></img>
                  </div>
                  <div className='rt-title-text'>New Plan</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                Desription <br/>
                <input className="form-control" type="text" placeholder="Enter description" />
              </div>
              <div className="col-md-12">
                Value (in Ether) <br/>
                <input className="form-control" type="text" placeholder="Enter value" />
              </div>
              <div className="col-md-12">
                Contracting company's wallet <br/>
                <input className="form-control" type="text" placeholder="Enter address" />
              </div>
              <div className="col-md-12">
                Contracting company's wallet <br/>
                <button className="btn btn-primary">Create new plan</button>
              </div>
            </div>
            
          </div>
        </section>
      </Layout>
    );
  }
}