import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigationbar() {
	return (
		<Navbar expand="lg" className="navbar">
			<Container>
				<Navbar.Brand className="navbar-brand">
					<a className="navbar-item" href="https://github.com/Will-Emery">
						<img src="/assets/Github-Logo.png" alt="My GitHub" />
					</a>
					<a
						className="navbar-item"
						href="https://www.linkedin.com/in/william-emery/"
					>
						<img src="/assets/linkedin.png" alt="My LinkedIn" />
					</a>
					<h1 className="title mt-2 mb-1">William Emery</h1>
					{/* <a href="#" className="navbar-burger" data-target="nav-links">
						<span></span>
						<span></span>
						<span></span>
					</a> */}
				</Navbar.Brand>
				{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
				<Navbar.Collapse id="basic-navbar-nav" className="navbar-menu">
					<Nav className="me-auto navbar-start">
						<Nav.Link as={Link} to="/" className="navbar-item">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/about" className="navbar-item">
							About Me
						</Nav.Link>
						<Nav.Link as={Link} to="/contact" className="navbar-item">
							Contact
						</Nav.Link>
						<Nav.Link as={Link} to="/projects" className="navbar-item">
							Projects
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigationbar;
