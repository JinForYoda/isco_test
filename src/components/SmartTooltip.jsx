import React, { useEffect, useRef } from 'react';
import { computePosition, flip, shift, arrow, offset } from 'https://cdn.skypack.dev/@floating-ui/dom@0.2.0';
import { Button } from 'bootstrap';


export default function SmartTooltip({ target, setTarget }) {

	const tooltip = useRef()
	const arrowElement = useRef()

	const closeToolTip = (e) => {

		console.log(e.target, tooltip.current);
		e.target !== tooltip.current && setTarget()
	}

	useEffect(() => {
		computePosition(target, tooltip.current, {
			placement: 'right',
			middleware: [
				offset(50),
				flip(),
				shift({ padding: 5 }),
				arrow({ element: arrowElement.current }),
			],
		}).then(({ x, y, placement, middlewareData }) => {
			Object.assign(tooltip.current.style, {
				left: `${x}px`,
				top: `${y}px`,
			});

			// Accessing the data
			const { x: arrowX, y: arrowY } = middlewareData.arrow;

			const staticSide = {
				top: 'bottom',
				right: 'left',
				bottom: 'top',
				left: 'right',
			}[placement.split('-')[0]];

			Object.assign(arrowElement.current.style, {
				left: arrowX != null ? `${arrowX}px` : '',
				top: arrowY != null ? `${arrowY}px` : '',
				right: '',
				bottom: '',
				[staticSide]: '-15px',
			});
		});

	}, [target])


	return target
		? <div onClick={closeToolTip} className='toolTipBckg'>< div onClick={(e) => { e.stopPropagation() }} ref={tooltip} id='toolTip' role='tooltip'  >
			<div ref={arrowElement} id="arrow"></div>

		</div >
		</div>
		: null
}
