var React = require('react');
var Dropdown1 = require('./timedropdown.js');
var Chart = require('./chart');

var depositContainer = React.createClass({
	getInitialState: function(){
		return {values: []};
	},
	updateValues: function(dataArray){
		this.setState({
			values: dataArray
		})
	},
	render: function(){
		return (
		<div className = "deposit-container">
			<Chart data = {this.state.values}/>
			<Dropdown1 changeFunc={this.updateValues}/>
		</div>
		);
	}
});


module.exports = depositContainer;