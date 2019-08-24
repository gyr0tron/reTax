import React, { Component } from "react";
import $ from "jquery";
import { Form, Button, Input, Message, TextArea } from "semantic-ui-react";
import generator from "../../etherium/generator";
import web3 from "../../etherium/web3";
import ipfs from "../../etherium/ipfs";
import Layout from "./../../components/Layouts/Layouts";
import { Router } from "../../routes";

class BillNew extends Component {
  state = {
    description: "",
    errorMessage: "",
    details: "",
    loading: false,
    ipfsHash: null,
    buffer: ""
  };

  captureFile = event => {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => this.convertToBuffer(reader);
  };

  convertToBuffer = async reader => {
    //file is converted to a buffer for upload to IPFS
    const buffer = await Buffer.from(reader.result);
    //set this buffer -using es6 syntax
    this.setState({ buffer });

    await ipfs.add(this.state.buffer, (err, ipfsHash) => {
      // console.log(err, ipfsHash);
      this.setState({ ipfsHash: ipfsHash[0].hash });
      console.log(this.state.ipfsHash);
    }); //await ipfs.add
  };

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await generator.methods
        .createBill(
          this.state.description,
          this.state.ipfsHash,
          this.state.details
        )
        .send({
          from: accounts[0]
        });
      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout title='Welcome to reTax'>
        <section style={{ paddingTop: 100 }}>
          <div className='container'>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-sm-8'>
                    <h2 className='text-primary'>Create a new Bill</h2>
                    <Form
                      onSubmit={this.onSubmit}
                      error={!!this.state.errorMessage}
                    >
                      <Form.Field>
                        {/* <label>Enter a title for the bill</label> */}
                        <div className='form-group'>
                          <Input
                            placeholder='Topic'
                            value={this.state.description}
                            onChange={event =>
                              this.setState({ description: event.target.value })
                            }
                          />
                        </div>

                        <div className='form-group'>
                          <TextArea
                            placeholder='Description'
                            value={this.state.details}
                            onChange={event =>
                              this.setState({ details: event.target.value })
                            }
                          />
                        </div>
                        <input type='file' onChange={this.captureFile} />
                      </Form.Field>
                      <Message
                        error
                        header='Error'
                        content={this.state.errorMessage}
                      />
                      <Button loading={this.state.loading} primary>
                        Create
                      </Button>
                    </Form>

                    {/* <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Topic'
                      />
                    </div>
                    <div className='form-group'>
                      <textarea
                        className='form-control'
                        rows='4'
                        cols='50'
                        placeholder='Description'
                      ></textarea>
                    </div>
                    <div className='form-group'>
                      <input type='file' multiple></input>
                    </div> */}
                    {/* <button className='btn btn-primary'>Create</button> */}
                  </div>
                  <div className='col-sm-4'>
                    <img
                      id='logo'
                      src='/static/img/bill.png'
                      style={{ margin: 15, width: "60%" }}
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
export default BillNew;
