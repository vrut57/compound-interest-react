import React from 'react';

class ClearButton extends React.Component{
	render(){
		return (
		<div className="buttons">
			<input className="clear-button" type="submit"
			value="Clear Values" onClick={this.props.clearAll}/>
	      </div>
		);
	}
};


export default ClearButton;

