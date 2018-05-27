import React from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';

class Auth extends React.Component {
	state = {
		controls: {
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Your Mail'
				},
				value: '',
				validation: {
					required: true,
					isEmail: true
				},
				valid: false,
				touched: false
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Your Password'
				},
				value: '',
				validation: {
					required: true,

					minLength: 7
				},
				valid: false,
				touched: false
			}
		}
	};
	render() {
		const formElementsArray = [];
		for (let key in this.state.controls) {
			formElementsArray.push({
				id: key,
				config: this.state.controls[key]
			});
		}
		const form = formElementsArray.map((formElement) => (
			
				<Input
					key={formElement.id}
					elementType={formElement.config.elementType}
					elementConfig={formElement.config.elementConfig}
					value={formElement.config.value}
					invalid={!formElement.config.valid}
					shouldValidate={formElement.config.validation}
					touched={formElement.config.touched}
					changed={(event) => this.inputChangedHandler(event, formElement.id)}
				/>
			
		));
		return (
			<div className={classes.Auth}>
				<form >{form}</form>
				<Button btnType="Success">Submit</Button>
                
			</div>
		);
	}
}

export default Auth