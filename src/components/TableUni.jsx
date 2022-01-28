import React, { useEffect, useState } from 'react';
import Students from './Students';
import Subjects from './Subjects';
import Table from 'react-bootstrap/Table'

export default function TableUni() {

	return (
		<Table borderless className='tableWrapper w-auto'>
			<thead className='tableRow'>
				<tr>
					<th className='smallTh'><h5 className='halfVis'>П</h5></th>
					<th className='nameTh'><h5 className='halfVis'>ФИО студента</h5></th>
					<Subjects />
				</tr>
			</thead>

			<tbody className='tableRow'>
				<Students />
			</tbody>

		</Table>
	)
}
