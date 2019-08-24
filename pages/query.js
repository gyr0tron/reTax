import React, { Component } from "react";
import $ from "jquery";

import Layout from "./../components/Layouts/Layouts";

class Query extends Component {
  state = {

  };
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Layout title='Welcome to reTax'>
        <section style={{ paddingTop: 100 }} className="section-rt">
          <div className="container">
            <div className="card card-rt">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <h2 className="text-primary font-weight-bold">Make your voice heard</h2>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Write a topic for your query" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" rows="4" cols="50" placeholder="Give detail information about your query">
                      </textarea>
                    </div>
                    <div className="form-group">
                    <div className="custom-file">
  <input type="file" className="custom-file-input" id="customFile"/>
  <label className="custom-file-label" htmlFor="customFile">Choose file</label>
</div>
                    </div>
                    <div className="float-right">
                      <button className="btn btn-rt btn-primary">Submit</button>
                    </div>
                  </div>
                  <div className="col-sm-6 px-3">
                    <div className="text-center">
                      <img id='logo' src='/static/img/user.png' className="img-fluid" style={{ margin: 15, width: '350px', height: 'auto' }} />
                    </div>
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
