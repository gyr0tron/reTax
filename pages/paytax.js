import React, { Component } from "react";
import Layout from "./../components/Layouts/Layouts";
import { Form, Button, Input, Message } from "semantic-ui-react";
import generator from "../etherium/generator";
import web3 from "../etherium/web3";
import { Router } from "../routes";

export default class BillPlanNew extends Component {
  static async getInitialProps () {
    const minimumTax = await generator.methods.minimumTax().call();
    return { minimumTax };
  }

  state = {
    tax: "",
    errorMessage: "",
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await generator.methods.payTax().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.tax, "Ether")
      });
      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render () {
    return (
      <Layout title='Bills | Plans'>
        <section style={{ paddingTop: 100 }} className='section-rt'>
          <div className='container'>
            <div className="card card-rt">
              <div className="card-body">
                <div className='row'>
                  <div className='col-md-8'>
                    <div className='rt-title mb-3'>
                      <div className="rt-title-text">Tax payment</div>
                    </div>
                    <div className='rt-subtitle'>For registering yourself as a <strong>voter</strong> you need to pay the minimum tax assigned to you.</div>

                    <div className="my-3"><strong>Minimum Tax:{" "}{web3.utils.fromWei(this.props.minimumTax, "Ether")}</strong>{" "}Ether</div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-10 px-0">
                          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                            <Form.Field>
                              <Input
                                label='Ether'
                                labelPosition='right'
                                value={this.state.tax}
                                onChange={event =>
                                  this.setState({ tax: event.target.value })
                                }
                              />
                            </Form.Field>
                            <Message
                              error
                              header='Error'
                              content={this.state.errorMessage}
                            />
                            <Button className="btn-rt semantic primary" loading={this.state.loading} primary> Pay </Button>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img
                      className='img-fluid'
                      src='/static/img/money.svg'
                      alt='Bill'
                      style={{ height: '300px' }}
                    />
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
