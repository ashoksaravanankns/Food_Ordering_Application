import React from 'react';
import classes from './Input.css';

const Input = (props) => {
	let inputElement = null;
	switch (props.elementType) {
		case 'input':
			inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value}  onChange={props.changed}/>;
			break;
		case 'textarea':
			inputElement = <textarea className={classes.InputElement} {...props.elementConfig} value={props.value}  onChange={props.changed}/>;
			break;
		case 'select':
			inputElement = (
				<select className={classes.InputElement} value={props.value} onChange={props.changed}>
					{props.elementConfig.options.map((option) => <option key={option.value} value={option.value} >{option.displayValue}</option>)}
				</select>
			);
			break;

		default:
			inputElement = <input className={classes.InputElement} {...props.elementConfig} />;
			break;
	}
	return (
		<div className={classes.Input}>
			<label className={classes.Label} htmlFor="">
				{props.label}
			</label>
			{inputElement}
		</div>
	);
};

export default Input;
