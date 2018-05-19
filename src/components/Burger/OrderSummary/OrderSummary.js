import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span>{igKey}</span>:{props.ingredients[igKey]}
			</li>
		);
	});

	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with following ingredients</p>
			<ul>{ingredientSummary}</ul>
            <p>continue to checkout</p>
		</Aux>
	);
};

export default orderSummary;
