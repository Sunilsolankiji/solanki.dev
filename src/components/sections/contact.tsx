import { Container, Button } from 'react-bootstrap';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="section-padding border-top border-secondary">
      <Container className="text-center">
        <div className="mb-4">
          <h2 className="display-5 fw-bold font-headline mb-3">
            Get In Touch
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
          </p>
        </div>
        <div className="my-4">
          <Button href="mailto:sunilso9644@gmail.com" variant="primary" size="lg">
            <Mail className="me-2" size={16} />
            Say Hello
          </Button>
        </div>
        <div className="d-flex justify-content-center gap-3 mb-4">
          <a
            href="https://github.com/SunilSolankiji"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-link"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/devsunilsolanki"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-link"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <div className="text-secondary small">
          © {year} Sunil Solanki. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
