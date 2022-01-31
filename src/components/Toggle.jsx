import React, { useState } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ChildWrapper from './ChildWrapper';
export default function Toggle({ buttonsWithComponents }) {
	const [radioValue, setRadioValue] = useState(0)
	return (
		<>
			<ToggleButtonGroup className='toggleBox' type="radio" name="options" defaultValue={0}>
				{buttonsWithComponents.map((el, idx) =>
					<ToggleButton key={idx} onChange={(e) => setRadioValue(e.currentTarget.value)} className='toggleBtn' id={`tbg-radio-${idx}`} value={idx}>
						{el.button}
					</ToggleButton>
				)}
			</ToggleButtonGroup>
			<ChildWrapper child={buttonsWithComponents[radioValue].component} />
		</>

	)
}
