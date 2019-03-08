import React from 'react';
import Deposits from './deposits';
import ClearButton from './clear';
import Rate from './Rate';

class Dropdown1 extends React.Component{
	constructor(props){
		super(props);
		this.state = {value: 'Year', number: 20};
	};
	handleChange(e){
		this.setState({value: e.target.value});
		var numToShow = 0;
		if(e.target.value === 'Year'){
			numToShow = 20;
		}
		else{
			numToShow = 12;
		}
		this.props.setNumToShow(numToShow);
	};
	resetClearClick(){
		this.setState({
			clearValues: false
		})
	};
	render(){
		return (
		<div className="deposits-container">
			  <span className="inline sm-margin">Select duration: </span>
		      <div className = 'dropdown-1 inline sm-margin'>
		          <select value={this.state.value} onChange={this.handleChange}>
		            <option value="Year">Years</option>
		            <option value="Month">Months</option>
		          </select>
		      </div>
			  <Rate changeRate={this.props.changeRate} rate = {this.props.rate}/>
			  <ClearButton clearAll = {this.props.clearAll}/>
		      <Deposits updateDeposits ={this.props.updateDeposits} depositValues = {this.props.depositValues} unit={this.state.value} numToShow={this.props.numToShow}
		      clearValues={this.state.clearValues} resetClear={this.resetClearClick}/>
	      </div>
		);
	}
};


export default Dropdown1;

