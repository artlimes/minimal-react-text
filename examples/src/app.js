/* eslint react/prop-types: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import MinimalReactText from './components/MinimalReactText';

ReactDOM.render(
	<div>
		<MinimalReactText label="Label"/>
    <MinimalReactText label="Label" placeholder="Placeholder"/>
    <MinimalReactText label="Label" placeholder="Placeholder" inputValue="InputValue"/>
    <MinimalReactText label="Label" isRequired={true}/>
    <MinimalReactText label="Label" placeholder="Placeholder" isDisabled={true}/>
    <MinimalReactText label="Label" type="textarea"/>
    <MinimalReactText label="Label" type="textarea" textareaLarge={true}/>
	</div>,
	document.getElementById('example')
);
