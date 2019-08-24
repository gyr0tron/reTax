import React, { Component } from "react";
import Layout from "../../components/Layouts/Layouts";
import Bill from "../../etherium/bill";
import { Card, Button, Grid, GridColumn } from "semantic-ui-react";
import { Link } from "../../routes";

class BillShow extends Component {
  static async getInitialProps(props) {
    const bill = Bill(props.query.address);
    const summary = await bill.methods.getSummary().call();
    const billDescription = await bill.methods.billDescription().call();
    return {
      address: props.query.address,
      plansCount: summary[0],
      votersCount: summary[1],
      politician: summary[2],
      billDescription
    };
  }

  render() {
    return (
      <Layout>
        <div className='navbar-space' />
        <div className='container'>
          <div className='card'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-sm-8'>
                  <div className='card-heading'>
                    <h1>Bill Details</h1>
                    <div></div>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <div className='info'>
                          <span className='key'>Bill Name</span>
                          <span className='value'>
                            {this.props.billDescription}
                          </span>
                        </div>
                      </div>
                      <div className='col-sm-12'>
                        <div className='info'>
                          <span className='key'>Address of the Politician</span>
                          <span className='value'>{this.props.politician}</span>
                        </div>
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
                          <span className='value'>
                            {this.props.votersCount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-4'>
                  <Link route={`/bills/${this.props.address}/plans`}>
                    <a>
                      <Button primary>View Plans</Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BillShow;
