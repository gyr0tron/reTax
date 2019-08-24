import React, { Component } from "react";
import $ from "jquery";
import each from "async/each";
import generator from "../etherium/generator";
import Bill from "../etherium/bill";
import web3 from "../etherium/web3";
import { Link } from "../routes";

import Layout from "./../components/Layouts/Layouts";
import Book from "./../components/Icons/book";
import Money from "./../components/Icons/money";
import Setting from "./../components/Icons/setting";
import Vote from "./../components/Icons/vote";

class Index extends Component {
  state = {
    bills: [],
    minimumTax: "",
    totalTax: ""
  };
  constructor(props) {
    super(props);
    this.windowScrollEvent = this.windowScrollEvent.bind(this);
    this.makeNavbarWhite = this.makeNavbarWhite.bind(this);
    this.makeNavbarTransparent = this.makeNavbarTransparent.bind(this);
  }
  async componentDidMount() {
    this.windowScrollEvent();
    $(window).scroll(this.windowScrollEvent);
    // Get Data
    const billsList = await generator.methods.getDeployedBills().call();
    const minimumTax = await generator.methods.minimumTax().call();
    const totalTax = await generator.methods.getTotalTax().call();
    let bills = [];
    each(
      billsList,
      async (address, callback) => {
        let bill = Bill(address);
        let billDescription = await bill.methods.billDescription().call();
        let data = {
          address: address,
          description: billDescription
        };
        bills.push(data);
        callback();
      },
      () => {
        this.setState({ minimumTax, totalTax, bills });
      }
    );
  }
  componentWillUnmount() {
    $(window).unbind("scroll");
  }
  renderBills() {
    return this.state.bills.map((bill, key) => {
      return(
        <div className="card" style={{marginBottom:10}}>
          <div className="card-body">
            <h4 style={{marginBottom:0}}>{bill.description}</h4>
            <Link route={`/bills/${bill.address}`}>
              <a>View Bill</a>
            </Link>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <Layout title='Welcome to reTax'>
        <section id='home'>
          <div className='animation-area'>
            <ul className='circles'>
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
            <div className='container'>
              <div className='row' style={{ paddingTop: 50 }}>
                <div
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "10px"
                  }}
                  >
                  <img
                    height='150'
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginBottom: "10px"
                    }}
                    id='logo'
                    src='/static/img/logo_white.png'
                    />
                  <p
                    style={{
                      fontSize: "20px",
                      fontStyle: "italic",
                      color: "white"
                    }}
                    >
                    "Helping you relax, simplifying the matters of tax."
                  </p>
                </div>
                <div className='col-sm-12'>
                  <div className='bills-list' style={{ marginBottom: "10px" }}>
                    <h1>Currently in-process Bills</h1>
                    <h4>
                      Minimum Tax:{" "}
                      {web3.utils.fromWei(this.state.minimumTax, "Ether")} Ether
                    </h4>
                    <h4>
                      Total Tax Collected:{" "}
                      {web3.utils.fromWei(this.state.totalTax, "Ether")} Ether
                    </h4>
                  </div>
                </div>
                <div className='col-sm-8'>{this.renderBills()}</div>
                <div className='col-sm-4'>
                  <Link route='/paytax'>
                    <a>
                      <button
                        style={{ margin: "10px" }}
                        className='btn btn-white'
                        >
                        <i className='fa fa-plus' aria-hidden='true' />
                        &nbsp;Pay Tax
                      </button>
                    </a>
                  </Link>
                  <Link route='/bills/new'>
                    <a>
                      <button className='btn btn-white'>
                        <i className='fa fa-plus' aria-hidden='true' />
                        &nbsp;Create Bill
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='navbar-space' />
        <section id='features'>
          <div className='container'>
            <div className='row' style={{marginTop:20, marginBottom:30}}>
              <div className="col-sm-12">
                <div className="text-center">
                  <h1 className="text-primary">The Process</h1>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-3'>
                <div className='border-0 px-1'>
                  <div className='text-center'>
                    <Book />
                    <h4 style={{marginTop:15}}>Politician creates a plan</h4>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div class='border-0 px-1'>
                  <div className='text-center'>
                    <Money />
                    <h4 style={{marginTop:15}}>A public funding pool is generated</h4>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div class='border-0 px-1'>
                  <div className='text-center'>
                    <Vote />
                    <h4 style={{marginTop:15}}>Citizens vote for their preferable plan</h4>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div class='border-0 px-1'>
                  <div className='text-center'>
                    <Setting />
                    <h4 style={{marginTop:15}}>On success, money is transferred to the contractors and the plan is executed</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
  windowScrollEvent() {
    if ($(window).scrollTop() >= 100) {
      this.makeNavbarWhite();
    } else {
      this.makeNavbarTransparent();
    }
  }
  makeNavbarTransparent() {
    $("#navbar").removeClass("bg-white");
    $("#navbar").addClass("nav-transparent");
    $("#navbar").removeClass("navbar-light");
    $("#navbar").addClass("navbar-dark");
    $("#logo").attr("src", "/static/img/logo_white.png");
  }
  makeNavbarWhite() {
    $("#navbar").addClass("bg-white");
    $("#navbar").removeClass("nav-transparent");
    $("#navbar").addClass("navbar-light");
    $("#navbar").removeClass("navbar-dark");
    $("#logo").attr("src", "/static/img/logo_black.png");
  }
}

export default Index;
