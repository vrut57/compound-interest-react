import React from 'react';
import DepositContainer from './DepositContainer';


class Container extends React.Component {
	render(){
		return (
		<div className = "app-container">
			<h1>Compound Interest Calculator</h1>
			<p>This is a compound interest calculator built with react. Enter your deposits and see your money grow!</p>
			<DepositContainer/>
		</div>
		);
	}
};


export default Container;