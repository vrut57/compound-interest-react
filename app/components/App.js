var React = require('react');
// var Dropdown1 = require('./timedropdown.js');
// var Chart = require('./chart');
var DepositContainer = require('./DepositContainer');


var container = React.createClass({
	render: function(){
		return (
		<div className = "app-container">
			<h1>Compound Interest Calculator</h1>
			<p>This is a compound interest calculator built with react. Enter your deposits and see your money grow!</p>
			<DepositContainer/>
		</div>
		);
	}
});


module.exports = container;