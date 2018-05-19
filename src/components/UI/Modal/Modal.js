import React from 'react';
import Classes from './Modal.css';

const modal = (props) => <div className={Classes.Modal}>{props.children}</div>;
export default modal;