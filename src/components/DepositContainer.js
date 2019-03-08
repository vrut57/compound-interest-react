import React from "react";
import Dropdown1 from "./timedropdown";
import Chart from "./chart";

class DepositContainer extends React.Component {
  constructor(props) {
    super(props);
    var valuesArr = [];
    for (var i = 0; i < 20; i++) {
      valuesArr.push("");
    }
    this.state = {
      values: valuesArr,
      rate: 5,
      numToShow: 20
	};
	this.updateDeposits = this.updateDeposits.bind(this);
  }
  setNumToShow(newNum) {
    this.setState({ numToShow: newNum });
  }
  updateDeposits(dataArray) {
    this.setState({
      values: dataArray
    });
  }
  updateRate(newRate) {
    this.setState({
      rate: newRate
    });
  }
  clearAll() {
    var valuesArr = [];
    for (var i = 0; i < 20; i++) {
      valuesArr.push("");
    }
    this.setState(
      {
        values: valuesArr,
        rate: 5
      },
      function() {}
    );
  }
  render() {
    return (
      <div className="deposit-container">
        <Chart rate={this.state.rate} data={this.state.values} />
        <Dropdown1
          numToShow={this.state.numToShow}
          setNumToShow={this.setNumToShow}
          clearAll={this.clearAll}
          updateDeposits={this.updateDeposits}
          depositValues={this.state.values}
          rate={this.state.rate}
          changeRate={this.updateRate}
        />
      </div>
    );
  }
}

export default DepositContainer;
