var React = require('react');

var deposits = React.createClass({
	getInitialState: function(){
		var valuesArray = [];
		for(var i = 0; i < this.props.numToShow;i++){
			valuesArray.push("");
		}
		return {values: valuesArray};
	},
	componentWillReceiveProps: function(nextProps){
		console.log("Clear values is " + nextProps.clearValues);
		if(nextProps.clearValues){
			this.clearValues();
		}
	},
	componentDidUpdate: function(prevProps, prevState){

	},
	handleChange: function(i, e){
			var newValues = this.state.values.slice();
			newValues[i] = e.target.value;
			this.setState({
				values: newValues
			});
		console.log("Set state to " + e.target.value);

		console.log(this.state.values);

		//Communicate State back to parent to update graph
		this.props.changeFunc(this.state.values);

		// for(var i = 0; i < this.props.numToShow; i++){
		// 	console.log(this.state.values[i]);
		// }
	},
	clearValues: function(){
		var valuesArray = [];
		for(var i = 0; i < this.props.numToShow;i++){
			valuesArray.push("");
		}
		this.setState({
			values: valuesArray
		})
		this.props.resetClear();
	},
	render: function(){
		var depositFields = [];
		for(var i = 0; i < this.props.numToShow; i ++){
			depositFields.push(
				<div className="deposit" key={i}>
					<label>
						<div className="label">{this.props.unit} {i}</div> 
						<input type='text' 
							value={this.state.values[i]} 
							name={this.state.values[i]} 
							onChange={this.handleChange.bind(this, i)}/> 
					</label>
				</div>
			);
		}

		return (
	      <div className = 'inputs'>
	      	{depositFields}
	      </div>
		);
	}
});


module.exports = deposits;

