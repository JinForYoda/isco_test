import React, { useContext } from 'react';
import { UniContext } from '../Context';
import { getFullDate } from './utils/getFullDate';



export default function Subjects() {
	const { subjects } = useContext(UniContext)

	return subjects.map((subject) =>
		<th key={subject.id} className="subjectBlock">{
			subject.name !== ''
				? <>
					<h5 className='subjectName'>{subject.name}</h5>
					{isFinite(subject.id) && <h6 className='date halfVis'>{getFullDate()}</h6>}
				</>
				: <h6 className='dateOnly halfVis'>{getFullDate()}</h6>
		}</th>

	)
}
