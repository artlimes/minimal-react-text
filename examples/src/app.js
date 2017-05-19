/* eslint react/prop-types: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import MinimalReactText from './components/MinimalReactText';

ReactDOM.render(
	<div>
        <h3>Normal</h3>
	    <MinimalReactText label="Label"/>

        <h3>With Placeholder</h3>
        <MinimalReactText label="Label" placeholder="Placeholder"/>

        <h3>With Placeholder & InputValue</h3>
        <MinimalReactText label="Label" placeholder="Placeholder" inputValue="InputValue"/>

        <h3>Required</h3>
        <MinimalReactText label="Label" isRequired={true}/>

        <h3>Disabled</h3>
        <MinimalReactText label="Label" placeholder="Placeholder" isDisabled={true}/>

        <h3>Normal Textarea</h3>
        <MinimalReactText label="Label" type="textarea"/>

        <h3>Large Textarea</h3>
        <MinimalReactText label="Label" type="textarea" textareaLarge={true}/>
	</div>,
	document.getElementById('example')
);
