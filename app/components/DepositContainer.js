var React = require('react');
var Dropdown1 = require('./timedropdown.js');
var Chart = require('./chart');

var depositContainer = React.createClass({
	getInitialState: function(){
		
		var valuesArr = [];
		for(var i = 0; i < 20; i++){
			valuesArr.push("");
		}
		
		return {values: valuesArr, rate: 5, numToShow: 20};
	},
	setNumToShow: function(newNum){
		this.setState({numToShow: newNum})
	},
	updateDeposits: function(dataArray){
		this.setState({
			values: dataArray
		})
	},
	updateRate: function(newRate){
		this.setState({
			rate: newRate
		})
	},
	clearAll: function(){
		var valuesArr = [];
		for(var i = 0; i < 20; i++){
			valuesArr.push("");
		}
		this.setState({
			values: valuesArr,
			rate: 5
		}, function(){

		})

	},
	render: function(){
		return (
		<div className = "deposit-container">
			<Chart rate = {this.state.rate} data = {this.state.values}/>
			<Dropdown1 numToShow = {this.state.numToShow} setNumToShow = {this.setNumToShow} clearAll = {this.clearAll} updateDeposits = {this.updateDeposits} depositValues = {this.state.values} rate = {this.state.rate} changeRate = {this.updateRate}/>
		</div>
		);
	}
});


module.exports = depositContainer;