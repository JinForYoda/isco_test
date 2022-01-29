import React, { useEffect, useRef } from 'react';
import { computePosition, flip, shift, arrow, offset } from 'https://cdn.skypack.dev/@floating-ui/dom@0.2.0';
import TooltipForm from './TooltipForm';


export default function SmartTooltip({ selectedStudent, setSelectedStudent, target, setTarget }) {
	const tooltip = useRef()
	const arrowElement = useRef()

	const closeToolTip = (e) => {
		!tooltip.current.contains(e.target) && setTarget()
	}

	useEffect(() => {
		tooltip.current.hidden = false

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
				top: `${y + 100}px`,
			});

			const { x: arrowX, y: arrowY } = middlewareData.arrow;

			const staticSide = {
				top: 'bottom',
				right: 'left',
				bottom: 'top',
				left: 'right',
			}[placement.split('-')[0]];

			Object.assign(arrowElement.current.style, {
				left: arrowX != null ? `${arrowX}px` : '',
				top: arrowY != null ? `${arrowY - 100}px` : '',
				right: '',
				bottom: '',
				[staticSide]: '-15px',
			});

		});
	}, [target])


	return target
		? <div onClick={closeToolTip} className='toolTipBckg'>< div hidden={true} ref={tooltip} id='toolTip' role='tooltip' className='setVisible' >
			<div ref={arrowElement} id="arrow"></div>
			<TooltipForm target={target} setTarget={setTarget} selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent} />
		</div >
		</div>
		: null
}
