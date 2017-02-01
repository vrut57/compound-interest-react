var React = require('react');
var Deposits = require('./deposits');
var ClearButton = require('./clear');

var dropdown1 = React.createClass({
	getInitialState: function(){
		return {value: 'Year', number: 20, clearValues: false};
	},
	handleChange: function(e){
		this.setState({value: e.target.value});
		var numToShow = 0;
		if(e.target.value === 'Year'){
			numToShow = 20;
		}
		else{
			numToShow = 12;
		}
		this.setState({number: numToShow});
	},
	handleClearClick: function(e){
		this.setState({
			clearValues: true
		})
	},
	resetClearClick: function(){
		this.setState({
			clearValues: false
		})
	},
	render: function(){
		return (
		<div className="deposits-container">
			  <span className="inline sm-margin">Select duration: </span>
		      <div className = 'dropdown-1 inline sm-margin'>
		          <select value={this.state.value} onChange={this.handleChange}>
		            <option value="Year">Years</option>
		            <option value="Month">Months</option>
		          </select>
		      </div>
		      <Deposits unit={this.state.value} numToShow={this.state.number} changeFunc = {this.props.changeFunc}
		      clearValues={this.state.clearValues} resetClear={this.resetClearClick}/>
		      <ClearButton onClick={this.handleClearClick}/>
	      </div>
		);
	}
});


module.exports = dropdown1;

