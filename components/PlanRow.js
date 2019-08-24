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
            <Button color='green' basic onClick={this.onApprove}>
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {plan.complete ? null : (
            <Button color='teal' basic onClick={this.onFinalize}>
              Finalize
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default PlanRow;
