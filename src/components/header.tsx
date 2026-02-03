import { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Github, Linkedin, Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const routes = [
	{ name: 'About', href: '#about' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Contact', href: '#contact' },
];

export default function Header() {
	const [show, setShow] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Navbar expand="md" sticky="top" className="navbar-dark-custom border-bottom border-secondary">
			<Container>
				<Navbar.Brand href="/" className="fw-bold font-headline">
					Solanki.Dev
				</Navbar.Brand>

			<div className="d-flex align-items-center gap-2 ms-auto me-md-0 order-md-last">
				<button
					className="btn btn-outline-secondary btn-sm"
					onClick={toggleTheme}
					aria-label="Toggle theme"
					title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
				>
					{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
				</button>
				<a
					href="https://github.com/Sunilsolankiji"
					target="_blank"
					rel="noopener noreferrer"
					className="btn btn-outline-secondary btn-sm"
					aria-label="GitHub"
				>
					<Github size={16} />
				</a>
				<a
					href="https://www.linkedin.com/in/devsunilsolanki"
					target="_blank"
					rel="noopener noreferrer"
					className="btn btn-outline-secondary btn-sm"
					aria-label="LinkedIn"
				>
					<Linkedin size={16} />
				</a>
					<button
						className="btn btn-outline-secondary btn-sm d-md-none"
						onClick={handleShow}
						aria-label="Toggle Menu"
					>
						<Menu size={16} />
					</button>
				</div>

				<Navbar.Collapse className="d-none d-md-flex">
					<Nav className="me-auto">
						{routes.map((route) => (
							<Nav.Link key={route.href} href={route.href} className="text-secondary">
								{route.name}
							</Nav.Link>
						))}
					</Nav>
				</Navbar.Collapse>

				<Offcanvas show={show} onHide={handleClose} placement="start">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title className="fw-bold font-headline">Solanki.Dev</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="flex-column gap-3">
							{routes.map((route) => (
								<Nav.Link
									key={route.href}
									href={route.href}
									onClick={handleClose}
									className="fs-5 text-secondary"
								>
									{route.name}
								</Nav.Link>
							))}
						</Nav>
					</Offcanvas.Body>
				</Offcanvas>
			</Container>
		</Navbar>
	);
}
