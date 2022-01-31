import React, { useContext } from 'react';
import { Test1_Context } from '../Context';

export default function Subjects() {
	const { subjects } = useContext(Test1_Context)

	return subjects.map((subject) =>
		<th key={subject.date + subject.name} className="subjectBlock">{
			subject.name !== ''
				? <>
					<h5 className={subject.date !== '0' ? 'subjectName' : 'subjectName centered'}>{subject.name}</h5>
					{subject.date !== '0' && <h6 className='date halfVis'>{subject.date}</h6>}
				</>
				: <h6 className='dateOnly halfVis'>{subject.date}</h6>
		}</th>

	)
}
