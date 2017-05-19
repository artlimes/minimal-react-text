/* eslint react/prop-types: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import MinimalTextfield from './components/MinimalTextfield';

ReactDOM.render(
	<div>
		<MinimalTextfield label="Label"/>
    <MinimalTextfield label="Label" placeholder="Placeholder"/>
    <MinimalTextfield label="Label" placeholder="Placeholder" inputValue="InputValue"/>
    <MinimalTextfield label="Label" isRequired={true}/>
    <MinimalTextfield label="Label" placeholder="Placeholder" isDisabled={true}/>
    <MinimalTextfield label="Label" type="textarea"/>
    <MinimalTextfield label="Label" type="textarea" textareaLarge={true}/>
	</div>,
	document.getElementById('example')
);
