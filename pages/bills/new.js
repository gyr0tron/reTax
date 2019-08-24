import React, { Component } from "react";
import $ from "jquery";

import Layout from "./../../components/Layouts/Layouts";

class Query extends Component {
  state = {

  };
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
                  <div className="col-sm-8">
                    <h2 className="text-primary">Create a new Bill</h2>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Topic" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" rows="4" cols="50" placeholder="Description">
                      </textarea>
                    </div>
                    <div className="form-group">
                      <input type="file" multiple>
                      </input>
                    </div>
                    <button className="btn btn-primary">Create</button>
                  </div>
                  <div className="col-sm-4">
                    <img id='logo' src='/static/img/bill.png' style={{margin:15, width: '60%'}}/>
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
