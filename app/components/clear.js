var React = require('react');
var Deposits = require('./deposits');//Is this needed? 

var clearButton = React.createClass({
	render: function(){
		return (
		<div className="buttons">
			<input className="clear-button" type="submit"
			value="Clear Values" onClick={this.props.clearAll}/>
	      </div>
		);
	}
});


module.exports = clearButton;

