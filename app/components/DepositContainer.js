var React = require('react');
var Dropdown1 = require('./timedropdown.js');
var Chart = require('./chart');

var depositContainer = React.createClass({
	getInitialState: function(){
		return {values: [], rate: 5};
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
		this.setState({
			values: [],
			rate: 5
		}, function(){

		})

	},
	render: function(){
		return (
		<div className = "deposit-container">
			<Chart rate = {this.state.rate} data = {this.state.values}/>
			<Dropdown1 clearAll = {this.clearAll} updateDeposits = {this.updateDeposits} depositValues = {this.state.values} rate = {this.state.rate} changeRate = {this.updateRate}/>
		</div>
		);
	}
});


module.exports = depositContainer;