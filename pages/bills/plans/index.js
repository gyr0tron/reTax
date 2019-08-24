import React, { Component } from "react";
import Layout from "./../../../components/Layouts/Layouts";
import { Button, Table, Header, Container } from "semantic-ui-react";
import { Link } from "../../../routes";
import Bill from "../../../etherium/bill";
import web3 from "../../../etherium/web3";
import generator from "../../../etherium/generator";
import PlanRow from "../../../components/PlanRow";

export default class Plans extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const bill = Bill(address);
    const billDescription = await bill.methods.billDescription().call();
    const billDetails = await bill.methods.billDetails().call();
    const planCount = await bill.methods.getPlansCount().call();
    const plans = await Promise.all(
      Array(parseInt(planCount))
        .fill()
        .map((element, index) => {
          return bill.methods.plans(index).call();
        })
    );

    const votersCount = await generator.methods.votersCount().call();

    return {
      address,
      plans,
      planCount,
      votersCount,
      billDescription,
      billDetails
    };
  }

  renderRows() {
    return this.props.plans.map((plan, index) => {
      return (
        <PlanRow
          key={index}
          plan={plan}
          id={index}
          address={this.props.address}
          votersCount={this.props.votersCount}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout title='Bills | Plans'>
        <section style={{ paddingTop: 100 }} className='section-rt'>
          <div className='container rt-gray'>
            <div className='card card-rt'>
              <div className='card-body'>
                <div className='row justify-content-center'>
                  <div className='col-sm-12'>
                    <div className='d-flex align-items-end'>
                      <div className='rt-title-logo'>
                        <img
                          id='logo'
                          src='/static/img/votes-graph.svg'
                          className='img-fluid'
                        />
                      </div>
                      <div className='rt-title-text'>Vote for Plan</div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='card card-rt col-md-12 bg-pink mt-3'>
                    {this.props.billDescription}
                  </div>
                </div>
                <div className='row'>
                  <div className='card card-rt col-md-12 bg-red py-3 mt-3'>
                    <div>{this.props.billDetails}</div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-10'>
                    <div className='table-responsive'>
                      <Table>
                        <Header>
                          <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                          </Row>
                        </Header>
                        <Body>{this.renderRows()}</Body>
                      </Table>
                    </div>
                  </div>
                  <div className='col-md-2'>
                    <Link route={`/bills/${this.props.address}/plans/new`}>
                      <a>
                        <Button primary>Add new Plan</Button>
                      </a>
                    </Link>
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
