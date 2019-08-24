import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../etherium/web3";
import Bill from "../etherium/bill";
import { Router } from "../routes";

class PlanRow extends Component {
  onApprove = async () => {
    const bill = Bill(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await bill.methods.approvePlan(this.props.id).send({
      from: accounts[0]
    });
    Router.pushRoute(`/bills/${this.props.address}/plans`);
  };

  onFinalize = async () => {
    const bill = Bill(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await bill.methods.finalizePlan(this.props.id).send({
      from: accounts[0]
    });
    Router.pushRoute(`/bills/${this.props.address}/plans`);
  };

  render() {
    const { Row, Cell } = Table;
    const { id, plan } = this.props;
    const readyToFinalize = plan.approveVoteCount > this.props.votersCount / 2;
    return (
      <Row
        disabled={plan.complete}
        positive={readyToFinalize && !plan.complete}
      >
        <Cell>{id}</Cell>
        <Cell>{plan.description}</Cell>
        <Cell>{web3.utils.fromWei(plan.value, "Ether")}</Cell>
        <Cell>{plan.recipient}</Cell>
        <Cell>
          {plan.complete ? null : (
            <Button className="btn-rt success semantic px-0 px-1" onClick={this.onApprove}>
              <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-rt-icon">
                  <img className="" src="/static/img/thumbs-up.svg"/>
                </div>
                <div className="btn-rt-text">Approve</div>
              </div>
              </div>
            </Button>
          )}
        </Cell>
        <Cell>
          {plan.complete ? null : (
            <Button className="btn-rt primary semantic px-0 px-1" onClick={this.onFinalize}>
              <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-rt-icon">
                  <img className="" src="/static/img/checked.svg"/>
                </div>
                <div className="btn-rt-text">Finalize</div>
              </div>
              </div>
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default PlanRow;
