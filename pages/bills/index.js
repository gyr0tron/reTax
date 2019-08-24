import React, { Component } from "react";
import Layout from "./../../components/Layouts/Layouts";
import Bill from "../../etherium/bill";
import { Card, Button, Grid, GridColumn } from "semantic-ui-react";
import { Link } from "../../routes";
export default class BillShow extends Component {
  static async getInitialProps(props) {
    const bill = Bill(props.query.address);
    const summary = await bill.methods.getSummary().call();
    const billDescription = await bill.methods.billDescription().call();
    const billDetails = await bill.methods.billDetails().call();
    const ipfsHash = await bill.methods.ipfsHash().call();
    return {
      address: props.query.address,
      plansCount: summary[0],
      votersCount: summary[1],
      politician: summary[2],
      billDescription,
      billDetails,
      ipfsHash
    };
  }

  render() {
    return (
      <Layout title='Bill'>
        <section style={{ paddingTop: 100 }} className='section-rt'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
                <div className='rt-title'>
                  <div className='rt-title-logo'>
                    <img
                      className='img-fluid'
                      src='/static/img/bill.png'
                      alt='Bill'
                    ></img>
                  </div>
                  <div className='rt-title-text'>
                    {this.props.billDescription}
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card card-rt'>
                  Note: Before you vote, carefully go through the description
                  and the attached files. They will make sure you make the best
                  decision.
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div>Description:</div>
                <div className='card card-rt'>
                  <p>{this.props.billDetails}</p>
                </div>
                <div className='col-sm-12 card card-rt'>
                  <div className='info'>
                    <span className='key'>Name of the Politician</span>
                    <span className='value'>Politician 1</span>
                  </div>
                  <div className='info'>
                    <span className='key'>Address of the Politician</span>
                    <span className='value'>{this.props.politician}</span>
                  </div>
                  <div className='col-sm-12'>
                    <div className='info'>
                      <span className='key'>Plans in a bill</span>
                      <span className='value'>{this.props.plansCount}</span>
                    </div>
                  </div>
                  <div className='col-sm-12'>
                    <div className='info'>
                      <span className='key'>Number of voters</span>
                      <span className='value'>{this.props.votersCount}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row mt-3 justify-content-between"> */}
              <div className='col-md-6'>
                <div className='card card-rt'>
                  <div className='d-flex'>
                    <img
                      src={`https://ipfs.io/ipfs/${this.props.ipfsHash}`}
                      width='100'
                      height='100'
                    />
                  </div>
                </div>
                <div className='col-md-2'>
                  <div className='card card-rt'>
                    <Link route={`/bills/${this.props.address}/plans`}>
                      <a>
                        <Button primary>View Plans</Button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-5'>
              <div className='rt-bar primary'></div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
