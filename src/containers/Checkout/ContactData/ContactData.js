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
				value: ''
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter Street'
				},
				value: ''
			},
			postalCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter PostalCode'
				},
				value: ''
			},
			zipcode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter Zipcode'
				},
				value: ''
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Enter Email'
				},
				value: ''
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'cheapest', displayValue: 'Cheapest' }
					]
				},
				value: ''
			}
		},

		loading: false
	};

	orderHandler = (event) => {
        event.preventDefault();
        
        this.setState({ loading: true });
        const formData={}
        for(let element in this.state.orderForm){
            formData[element] = this.state.orderForm[element].value
        }
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			orderData:formData
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
	inputChangedHandler = (event, inputIdentifier) => {
		console.log(inputIdentifier);
		const updatedForm = { ...this.state.orderForm };

        const updatedFormElement = { ...updatedForm[inputIdentifier] };
        updatedFormElement.value= event.target.value
        updatedForm[inputIdentifier]=updatedFormElement
		this.setState({
            orderForm:updatedForm
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
		console.log(formElementArray);
		let formElement = formElementArray.map((input) => (
			<Input
				key={input.id}
				elementType={input.config.elementType}
				elementConfig={input.config.elementConfig}
				value={input.config.value}
				changed={(event) => this.inputChangedHandler(event, input.id)}
			/>
		));
		console.log(formElement);
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
