var React = require('react');

var deposits = React.createClass({
	handleChange: function(i, e){
		//Call this.props.updateDeposits
		var newValues = this.props.depositValues.slice();
		newValues[i] = e.target.value;
		
		this.props.updateDeposits(newValues);
	},
	render: function(){
		var depositFields = [];
		for(var i = 0; i < this.props.numToShow; i ++){
			depositFields.push(
				<div className="deposit" key={i}>
					<label>
						<div className="label">{this.props.unit} {i}</div> 
						<input type='text' 
							value={this.props.depositValues[i]} 
							name={this.props.depositValues[i]} 
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

