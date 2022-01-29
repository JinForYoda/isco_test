import React, { useContext } from 'react';
import { UniContext } from '../Context';
import { getFullDate } from './utils/getFullDate';



export default function Subjects() {
	const { subjects } = useContext(UniContext)

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
