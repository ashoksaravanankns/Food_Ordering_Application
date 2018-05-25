import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter Name'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter Street'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			postalCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter PostalCode'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			zipcode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter Zipcode'
				},
				value: '',
				validation: {
					required: true,
					minLength: 4,
					maxLength: 9
				},
				valid: false
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter Email'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'cheapest', displayValue: 'Cheapest' }
					]
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			}
		},

		loading: false
	};

	orderHandler = (event) => {
		event.preventDefault();

		this.setState({ loading: true });
		const formData = {};
		for (let element in this.state.orderForm) {
			formData[element] = this.state.orderForm[element].value;
		}
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			orderData: formData
		};
		axios
			.post('/orders.json', order)
			.then((response) => {
				this.setState({ loading: false });
				this.props.history.push('/');
			})
			.catch((error) => {
				this.setState({ loading: false });
			});
	};
	checkValidity(value, rules) {
		let isValid = false;

		if (rules.required) {
			isValid = value.trim() !== '';
		}
		if (rules.minLength) {
			isValid = value.length >= rules.minLength;
		}
		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength;
		}
		return isValid;
	}
	inputChangedHandler = (event, inputIdentifier) => {
		const updatedForm = { ...this.state.orderForm };

		const updatedFormElement = { ...updatedForm[inputIdentifier] };
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
		updatedForm[inputIdentifier] = updatedFormElement;
		console.log(updatedFormElement);
		this.setState({
			orderForm: updatedForm
		});
	};
	render() {
		const formElementArray = [];

		for (let key in this.state.orderForm) {
			formElementArray.push({
				id: key,
				config: this.state.orderForm[key]
			});
		}

		let formElement = formElementArray.map((input) => (
			<Input
				key={input.id}
				elementType={input.config.elementType}
				elementConfig={input.config.elementConfig}
				value={input.config.value}
				changed={(event) => this.inputChangedHandler(event, input.id)}
			/>
		));

		let form = (
			<form>
				{formElement}
				<Button btnType="Success" clicked={this.orderHandler}>
					ORDER
				</Button>
			</form>
		);
		if (this.state.loading) {
			form = <Spinner />;
		}

		return (
			<div className={classes.ContactData}>
				<h4>Enter your Contact Data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;
