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
            <div className="row">
              <div className="col-md-12">
                <div>Description:</div>
                <div className="card card-rt">
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla  dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla</p>
                </div>
              </div>
            </div>
            <div className="row mt-3 justify-content-between">
            <div className="col-md-9">
                <div className="card card-rt">
                  <div className="d-flex">
                  <div style={{height:'100px', width:'100px', backgroundColor: '#555', marginRight: '20px'}}></div>
                  <div style={{height:'100px', width:'100px', backgroundColor: '#555', marginRight: '20px'}}></div>
                  <div style={{height:'100px', width:'100px', backgroundColor: '#555', marginRight: '20px'}}></div>
                  <div style={{height:'100px', width:'100px', backgroundColor: '#555'}}></div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-rt">
                  <button className="btn btn-rt success">View plans</button>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <div className="rt-bar primary"></div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}