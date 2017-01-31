var React = require('react');
var Dropdown1 = require('./timedropdown.js');
var Chart = require('./chart');

var depositContainer = React.createClass({
	getInitialState: function(){
		return {values: []};
	},
	printValues: function(dataArray){
		console.log(dataArray);
		for(var i = 0; i < dataArray.length; i++){
			console.log(dataArray[i]);
		}
		this.setState({
			values: dataArray
		})
	},
	render: function(){
		return (
		<div className = "deposit-container">
			<Chart data = {this.state.values}/>
			<Dropdown1 changeFunc={this.printValues}/>
		</div>
		);
	}
});


module.exports = depositContainer;