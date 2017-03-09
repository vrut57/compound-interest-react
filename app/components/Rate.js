var React = require('react');

var rateButton = React.createClass({
	changeRateHandler: function(e){
        this.props.changeRate(e.target.value);
    },
    render: function(){
		return (
		<div className="rate-input">
            <span className="inline sm-margin">Select Rate: </span>
			<input className="rate-input-field" type="number"
			value={this.props.rate} onChange={this.changeRateHandler}/>
	      </div>
		);
	}
});


module.exports = rateButton;

