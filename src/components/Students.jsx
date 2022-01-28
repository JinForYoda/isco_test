import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UniContext } from '../Context';
import SmartTooltip from './SmartTooltip';
import { Portal } from 'react-portal'

export default function Students() {
	const { students, subjects } = useContext(UniContext)
	const [target, setTarget] = useState()

	useEffect(() => {
		if (target) target.classList.toggle('active')

		return () => {
			if (target) target.classList.toggle('active')
		}
	}, [target])
	return <>{
		students.map((student) =>
			<tr key={student.id}>
				<th className='smallTh'><h5 className=' halfVis'>{student.id}</h5></th>
				<th className='nameTh nameItem'><h5 >{student.fullname}</h5></th>
				{subjects.map(subject =>
					<th onClick={(e) => {
						setTarget(e.target);
					}} key={subject.id} className='hoverOn' >

						<h5 className={student.marks[subject.id] === 'Н' ? 'halfVis' : ''}>
							{student.marks[subject.id]}
						</h5>

					</th>

				)}
			</tr>
		)
	}
		{target && < Portal node={document.getElementById('root')} > <SmartTooltip target={target} setTarget={setTarget} /></Portal >}

	</>
}
