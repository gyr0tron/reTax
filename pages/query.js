import React, { Component } from "react";
import $ from "jquery";

import Layout from "./../components/Layouts/Layouts";

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
            <div className="row">
              <div className="col-sm-8">
                <div className="card">
                  <div className="card">
                    <div className="card-body">
                      <h2 className="text-primary">Make your voice heard</h2>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Write a topic for your query" />
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" rows="4" cols="50" placeholder="Give detail information about your query">
                        </textarea>
                      </div>
                      <div className="form-group">
                        <input type="file" multiple>
                        </input>
                      </div>
                      <button className="btn btn-primary">Submit</button>
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
