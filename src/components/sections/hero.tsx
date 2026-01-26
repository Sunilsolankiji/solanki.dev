import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center justify-content-center">
      <Container>
        <Row className="g-4 g-lg-5 align-items-center">
          <Col lg={6} className="order-2 order-lg-1">
            <div className="mb-4">
              <h1 className="display-4 fw-bold font-headline mb-3">
                Sunil Solanki
              </h1>
              <p className="lead text-secondary">
                Software Developer,
                <br />
                Specializing in Angular, React, JavaScript, and TypeScript.
                <br />
                Passionate about building modern web applications and learning new technologies.
              </p>
            </div>
            <div className="d-flex flex-column flex-sm-row gap-2">
              <Button href="#projects" variant="primary" size="lg">
                View My Work
                <ArrowDown className="ms-2" size={16} />
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Contact Me
              </Button>
            </div>
          </Col>
          <Col lg={6} className="order-1 order-lg-2 text-center">
            <div className="hero-image-wrapper">
              <img
                src="images/me.jpg"
                alt="Sunil Solanki"
                className="hero-image rounded-circle shadow-lg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
