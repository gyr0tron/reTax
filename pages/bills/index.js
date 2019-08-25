import React, { Component } from "react";
import Layout from "./../../components/Layouts/Layouts";
import Bill from "../../etherium/bill";
import { Card, Button, Grid, GridColumn } from "semantic-ui-react";
import { Link } from "../../routes";
export default class BillShow extends Component {
  static async getInitialProps (props) {
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

  render () {
    return (
      <Layout title='Bill'>
        <section style={{ paddingTop: 100 }} className='section-rt'>
          <div className='container'>
            <div className="card card-rt px-2">
              <div className="card-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-7">
                      <div className='rt-title'>
                        <div className='rt-title-text'>
                          {this.props.billDescription}
                        </div>
                      </div>
                      <div className=" my-3">
                        <div className="font-weight-bold">Description:</div>
                        <div className="">{this.props.billDetails}</div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className='card card-rt mx-0 rt-shadow'>
                        <span className="font-weight-bold">Note: </span>
                        <span>Before you vote, carefully go through the description and the attached files. They will make sure you make the best decision.</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="font-weight-bold mt-3">Details:</div>
                      <div className="font-weight-light mb-2" style={{ fontSize: '.9rem', fontStyle: 'italic' }}>Relavant details of the bill which specify plans, politician incharge and number of total votes.</div>
                      <div className="card card-rt rt-shadow mt-4">
                        <div className='info'>
                          <span className='key'>Name of the Politician</span>
                          <span className='value'>Politician 1</span>
                        </div>
                        <div className='info'>
                          <span className='key'>Address of the Politician</span>
                          <span className='value'>{this.props.politician}</span>
                        </div>
                        <div className='info'>
                          <span className='key'>Plans in the bill</span>
                          <span className='value'>{this.props.plansCount}</span>
                        </div>
                        <div className='info'>
                          <span className='key'>Number of voters</span>
                          <span className='value'>{this.props.votersCount}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="font-weight-bold mt-3">Documents:</div>
                      <div className="font-weight-light" style={{ fontSize: '.9rem', fontStyle: 'italic' }}>Files uploaded by the creator of the bill to provide the context and need for it to pass.</div>
                      <a target="_blank" href={`https://ipfs.io/ipfs/${this.props.ipfsHash}`} className="card card-rt rt-shadow mt-4">
                        <img src={`https://ipfs.io/ipfs/${this.props.ipfsHash}`} width='auto' height='225px' />
                      </a>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-12">
                      <Link route={`/bills/${this.props.address}/plans`}>
                        <a>
                          <Button className="btn-rt primary semantic py-3">Explore Plans</Button>
                        </a>
                      </Link>
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
