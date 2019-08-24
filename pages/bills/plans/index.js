import React, { Component } from "react";
import Layout from "./../../../components/Layouts/Layouts";
export default class Plans extends Component {
  state = {
  };
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Layout title='Bills | Plans'>
        <section style={{ paddingTop: 100 }} className="section-rt">
          <div className="container rt-gray">
            <div className="card card-rt">
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-sm-12">
                    <div className="d-flex align-items-end">
                      <div className="rt-title-logo"><img id='logo' src='/static/img/votes-graph.svg' className="img-fluid" /></div>
                      <div className="rt-title-text">Vote for Plan</div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className="card card-rt col-md-12 bg-pink mt-3">Bill Name</div>
                </div>
                <div className='row'>
                  <div className="card card-rt col-md-12 bg-red py-3 mt-3">
                    <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10">
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <th>#</th>
                          <th>Name</th>
                          <th>Amount</th>
                          <th>Recipient</th>
                          <th></th>
                          <th></th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Plan name</td>
                            <td>0.06</td>
                            <td>ab213b12bcb2b312b412bcb12vb412</td>
                            <td>
                              <button className="btn btn-rt success">
                                <div className="btn-rt--icon">
                                </div>
                                <div className="btn-rt--text">
                                  Support
                              </div>
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-rt success">
                                <div className="btn-rt--icon">
                                </div>
                                <div className="btn-rt--text">
                                  Finalize
                              </div>
                              </button>
                            </td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Plan name</td>
                            <td>0.09</td>
                            <td>ab213b12bcb2b312b412bcb12vb412</td>
                            <td>
                              <button className="btn btn-rt success">
                                <div className="btn-rt--icon">
                                </div>
                                <div className="btn-rt--text">
                                  Support
                              </div>
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-rt success">
                                <div className="btn-rt--icon">
                                </div>
                                <div className="btn-rt--text">
                                  Finalize
                              </div>
                              </button>
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-rt success">
                      <div className="btn-rt--icon">
                      </div>
                      <div className="btn-rt--text">
                        Create plan
                  </div>
                    </button>
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