import React from 'react';

class RateButton extends React.Component{
	changeRateHandler(e){
        this.props.changeRate(e.target.value);
    };
    render(){
		return (
		<div className="rate-input">
            <span className="inline sm-margin">Select Rate: </span>
			<input className="rate-input-field" type="number"
			value={this.props.rate} onChange={this.changeRateHandler}/>
	      </div>
		);
	}
};


export default RateButton;

