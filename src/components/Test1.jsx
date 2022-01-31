import React, { useState } from 'react';
import Title from './Title';
import TableUni from './TableUni'
import { Test1_Context } from '../Context'

export default function Test1() {

	const [subjects, setSubjects] = useState([
		{
			date: '22.01.22',
			name: 'Системный подход к анализу'
		},
		{
			date: '25.01.22',
			name: 'Несистемный подход к анализу'
		},
		{
			date: '29.01.22',
			name: ''
		},
		{
			date: '0',
			name: 'Отсутствий'
		},
		{
			date: '0',
			name: 'Баллы по практ. занятиям'
		},
		{
			date: '0',
			name: 'Итоговая оценка'
		},

	])

	const [students, setStudents] = useState([
		{
			id: 1,
			fullname: 'Васильева Анна Игоревна',
			marks: {
				[subjects[0].date + subjects[0].name]: 5,
				[subjects[4].date + subjects[4].name]: 42,
				[subjects[5].date + subjects[5].name]: 101
			}
		},
		{
			id: 2,
			fullname: 'Иванова Анна Игоревна',
			marks: {
				[subjects[1].date + subjects[1].name]: 3,
				[subjects[3].date + subjects[3].name]: 5,
				[subjects[5].date + subjects[5].name]: 70
			}
		},
		{
			id: 3,
			fullname: 'Барсукова Юлия Игоревна',
			marks: {
				[subjects[0].date + subjects[0].name]: 5,
				[subjects[1].date + subjects[1].name]: 'Н',
				[subjects[5].date + subjects[5].name]: 50
			}
		},
		{
			id: 4,
			fullname: 'Левый Олег Игоревич',
			marks: {

			}
		},
		{
			id: 5,
			fullname: 'Правый Олег Игоревич',
			marks: {
				3: "Н"
			}
		},

	])
	return (
		<Test1_Context.Provider value={{
			subjects, setSubjects,
			students, setStudents
		}}>
			<div className="container bckg">
				<Title />
				<TableUni />
			</div>
		</Test1_Context.Provider>
	)
}
