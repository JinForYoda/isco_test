import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UniContext } from '../Context';
import SmartTooltip from './SmartTooltip';
import { Portal } from 'react-portal'

export default function Students() {
	const { students, subjects } = useContext(UniContext)
	const [selectedStudent, setSelectedStudent] = useState({})
	const [target, setTarget] = useState()

	useEffect(() => {
		if (target) target.closest('th').classList.toggle('active')

		return () => {
			if (target) target.closest('th').classList.toggle('active')
		}
	}, [target])
	return <>{
		students.map((student) =>
			<tr key={student.id}>
				<th className='smallTh'><h5 className=' halfVis'>{student.id}</h5></th>
				<th className='nameTh nameItem'><h5 >{student.fullname}</h5></th>
				{subjects.map(subject =>
					<th onClick={(e) => {
						if (e.target.id === '0' || e.target.closest('th').id === '0') return
						setTarget(e.target.closest('th'));
						setSelectedStudent(student)
					}} key={subject.date + subject.name} className={subject.date !== '0' ? 'hoverOn' : ''} id={subject.date} subject={subject.name}>

						<h5 className={student.marks[subject.date + subject.name] === 'Н' ? 'halfVis' : ''}>
							{student.marks[subject.date + subject.name]}
						</h5>

					</th>

				)}
			</tr>
		)
	}
		{target && < Portal node={document.getElementById('root')} > <SmartTooltip selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent} target={target} setTarget={setTarget} /></Portal >}

	</>
}
