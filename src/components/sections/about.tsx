import { Container, Button } from 'react-bootstrap';
import { Github, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-body-tertiary">
      <Container>
        <div className="text-center">
          <h2 className="display-5 fw-bold font-headline mb-4">
            About Me
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '900px' }}>
            Software Developer with 4+ years of experience specializing in Angular, React, JavaScript,
            TypeScript, and modern UI frameworks. I have built
            scalable dashboards, JavaScript Gantt Chart and TourJS libraries and
            high-quality UI systems across multiple domains. Additionally, I
            designed and developed a reusable Angular Component Library now
            used across 30+ projects, improving development efficiency,
            consistency, and code maintainability across teams. Known for
            writing clean, modular code, optimizing UI performance, and
            delivering fast, reliable features in high-impact environments.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button
              href="https://github.com/SunilSolankiji"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-light"
            >
              <Github className="me-2" size={16} />
              GitHub
            </Button>
            <Button
              href="https://www.linkedin.com/in/devsunilsolanki"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              <Linkedin className="me-2" size={16} />
              LinkedIn
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
