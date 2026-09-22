import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Github, Linkedin, Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const routes = [
	{ name: 'About', href: '#about' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Contact', href: '#contact' },
];

export default function Header() {
	const [expanded, setExpanded] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const handleClose = () => setExpanded(false);

	return (
		<Navbar
			expand="md"
			expanded={expanded}
			sticky="top"
			className="navbar-dark-custom border-bottom border-secondary"
		>
			<Container>
				<Navbar.Brand href="#home" className="fw-bold font-headline brand-text flex-shrink-0">
					Solanki.Dev
				</Navbar.Brand>

			<div className="d-flex align-items-center gap-1 gap-md-2 ms-auto me-md-0 order-md-last flex-shrink-0">
				<button
					className="btn btn-outline-secondary btn-sm"
					onClick={(e) => toggleTheme(e)}
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
						onClick={() => setExpanded((prev) => !prev)}
						aria-label="Toggle Menu"
						aria-expanded={expanded}
					>
						<Menu size={16} />
					</button>
				</div>

				<Navbar.Collapse className="mt-2 mt-md-0">
					<Nav className="me-auto">
						{routes.map((route) => (
							<Nav.Link
								key={route.href}
								href={route.href}
								onClick={handleClose}
								className="text-secondary"
							>
								{route.name}
							</Nav.Link>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
