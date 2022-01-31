import React, { useContext, useEffect, useState, useRef } from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { Test1_Context } from '../Context';

export default function TooltipForm({ target, setTarget, selectedStudent, setSelectedStudent }) {
	const { students, setStudents } = useContext(Test1_Context)
	const [value, setValue] = useState('')
	const [isEnable, setIsEnable] = useState(true)
	const checkBox = useRef()

	const staticSubjects = ['Итоговая оценка', 'Баллы по практ. занятиям', 'Отсутствий']

	useEffect(() => {
		target.children[0].textContent === 'Н' && setIsEnable(false)
		selectedStudent.marks[target.id + target.getAttribute('subject')] && setValue(selectedStudent.marks[target.id + target.getAttribute('subject')])
	}, [])

	useEffect(() => {
		!isEnable && setValue('')
	}, [isEnable])


	const validate = (e) => {
		let re
		switch (staticSubjects.includes(target.getAttribute('subject'))) {
			case true:
				re = /^[1-9\b]+$/
				break
			default:
				re = /^[1-5\b]$/
		}


		if (e.target.value === '' || re.test(e.target.value)) {
			setValue(e.target.value)
		}

	}

	useEffect(() => {
		if (selectedStudent.changed) {
			delete selectedStudent.changed
			students.splice(selectedStudent.id - 1, 1, selectedStudent)
			setStudents(students)
			setTarget()
		}
	}, [selectedStudent])

	const submit = (e) => {
		e.preventDefault()
		setSelectedStudent({
			id: selectedStudent.id,
			fullname: selectedStudent.fullname,
			marks: {
				...selectedStudent.marks,
				[target.id + target.getAttribute('subject')]: checkBox.current.checked ? 'Н' : value
			},
			changed: true
		})
	}

	return (
		<div className='formBox'>
			<h5>Поставить отметку</h5>
			<div className='formBox__Field'>
				<h5 className='halfVis'>Студент</h5>
				<h5>{selectedStudent.fullname}</h5>
			</div>
			{target.id !== '0' && <div className='formBox__Field'>
				<h5 className='halfVis'>Дата</h5>
				<h5>{target.id}</h5>
			</div>}

			<Form className='form' onSubmit={submit}>
				<Form.Group hidden={staticSubjects.includes(target.getAttribute('subject'))} className="mb-3" controlId="formBasicCheckbox">
					<Form.Check ref={checkBox} type="checkbox" checked={!isEnable} onChange={(e) => {
						isEnable ? setIsEnable(false) : setIsEnable(true)
					}} label="Не присутствовал" />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Control onChange={validate} placeholder="Поставьте отметку" disabled={!isEnable} value={value}></Form.Control>

				</Form.Group>
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Button variant="primary" type="submit" id='formBtn'>
						Поставить отметку
					</Button>
				</div>
			</Form>
		</div >
	)
}
