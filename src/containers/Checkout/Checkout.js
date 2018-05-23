import React, { Component } from 'react';
import {Route} from  'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
	state = {
		ingredients: {
			salad: 1,
			meat: 1,
			cheese: 1,
			bacon: 1
		}
	};
	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);

		const ingredients = {};
		for (let param of query.entries()) {
			ingredients[param[0]] = +param[1];
		}
		this.setState({ ingredients: ingredients });
    }
    checkoutCancelled=()=>{
        this.props.history.goBack()
    }
    checkoutContinued=()=>{
        this.props.history.replace('/checkout/contact-data')
    }

	render() {
		return (
			<div>
				<CheckoutSummary ingredients={this.state.ingredients} checkoutCancelled = {this.checkoutCancelled} checkoutContinued = {this.checkoutContinued}/>
            <Route path={this.props.match + '/contact-data'}  component={ContactData}/> 
            </div>
		);
	}
}

export default Checkout;
