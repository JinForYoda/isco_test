import React from 'react';
import Toggle from './Toggle';
import TestComponent1 from './TestComponent1'
import TestComponent2 from './TestComponent2'
import TestComponent3 from './TestComponent3'

export default function Test2() {
	const buttonsWithComponents = [
		{
			button: 'Учебная деятельность',
			component: <TestComponent1 />
		},
		{
			button: 'Курсовые',
			component: <TestComponent2 />
		},
		{
			button: 'Практики',
			component: <TestComponent3 />
		}
	]
	return (
		<div className="container bckg">
			<Toggle buttonsWithComponents={buttonsWithComponents} />
		</div>
	)
}
