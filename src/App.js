import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import TableUni from './components/TableUni';
import Title from './components/Title';
import { UniContext } from './Context';
import 'reactjs-popup/dist/index.css';
import './styles/style.css'


function App() {
	const [subjects, setSubjects] = useState([
		{
			name: 'Системный подход к анализу',
			id: 1
		},
		{
			name: 'Несистемный подход к анализу',
			id: 2
		},
		{
			name: '',
			id: 3
		},

		{
			name: 'Отсутствий',
			id: 'absent'
		},
		{
			name: 'Баллы по практ. занятиям',
			id: 'practice'
		},
		{
			name: 'Итоговая оценка',
			id: 'finalMark'
		},

	]
	)

	const [students, setStudents] = useState([
		{
			id: 1,
			fullname: 'Васильева Анна Игоревна',
			marks: {
				1: 5,
				3: 4,
				'practice': 70,
				'finalMark': 150
			},
			extraMarks: {
				absent: 0,
				practice: 72,
			},
			finalMark: 179
		},
		{
			id: 2,
			fullname: 'Иванова Анна Игоревна',
			marks: {

			}
		},
		{
			id: 3,
			fullname: 'Барсукова Юлия Игоревна',
			marks: {

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
		<UniContext.Provider value={{
			subjects, setSubjects,
			students, setStudents
		}}>
			<div className="container bckg">
				<Title />
				<TableUni />
			</div>
		</UniContext.Provider>
	);
}

export default App;
