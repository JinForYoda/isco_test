import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand >ISCO</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link as={Link} to='test1'>Test 1</Nav.Link>
					<Nav.Link as={Link} to='test2'>Test 2</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}
