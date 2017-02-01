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
		if(nextProps.clearValues){
			this.clearValues();
		}
	},
	handleChange: function(i, e){
			var newValues = this.state.values.slice();
			newValues[i] = e.target.value;
			// this.setState({
			// 	values: newValues
			// });

		this.setState({values: newValues}, ()=> {
			this.props.changeFunc(this.state.values);
		});

		//Moved into the callback function of set state
		//Communicate State back to parent to update graph
		//this.props.changeFunc(this.state.values);
	},
	componentDidUpdate: function(){
		//Try setting the state here if it doesn't work inside the callback function of handle change
		 //this.props.changeFunc(this.state.values);
	},
	clearValues: function(){
		var valuesArray = [];
		for(var i = 0; i < this.props.numToShow;i++){
			valuesArray.push("");
		}
		this.setState({
			values: valuesArray
		}, ()=>{
			this.props.resetClear();
			this.props.changeFunc(this.state.values)
		})
		
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

