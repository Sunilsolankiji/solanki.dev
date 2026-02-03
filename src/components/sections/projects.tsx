import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/projects.ts";

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const itemsToShow = showAll ? projects.length : 4;
    const visibleProjects = projects.slice(0, itemsToShow);
    const hasMoreProjects = projects.length > 4;

    return (
        <section id="projects" className="section-padding">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold font-headline mb-3">
                        My Projects
                    </h2>
                    <p
                        className="lead text-secondary mx-auto"
                        style={ { maxWidth: "900px" } }
                    >
                        Here are some of the projects I've worked on. Each one represents
                        a learning journey and a step forward in my development career.
                    </p>
                </div>
                <Row className="g-3 g-md-4">
                    { visibleProjects.map((project) => (
                        <Col key={ project.title } xs={ 12 } md={ 6 } lg={ 6 }>
                            <Card className="h-100 bg-body-tertiary border-secondary card-hover">
                                <Card.Header className="bg-transparent border-0 pt-4">
                                    <Card.Title className="h4">{ project.title }</Card.Title>
                                    <Card.Text className="text-secondary">
                                        { project.description }
                                    </Card.Text>
                                </Card.Header>
                                <Card.Body>
                                    <img
                                        src={ project.image }
                                        alt={ project.title }
                                        className="img-fluid rounded mb-3"
                                    />
                                    <div className="d-flex flex-wrap gap-2">
                                        { project.tags.map((tag) => (
                                            <Badge key={ tag } bg="secondary">
                                                { tag }
                                            </Badge>
                                        )) }
                                    </div>
                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0 pb-4">
                                    <div className="d-flex flex-wrap gap-2">
                                        { project.codeLink && (
                                            <Button
                                                href={ project.codeLink }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="outline-light"
                                                className="flex-grow-1"
                                            >
                                                View on GitHub
                                                <ArrowUpRight className="ms-2" size={ 16 }/>
                                            </Button>
                                        ) }
                                        { project.demoLink && (
                                            <Button
                                                href={ project.demoLink }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="outline-light"
                                                className="flex-grow-1"
                                            >
                                                Demo
                                                <ArrowUpRight className="ms-2" size={ 16 }/>
                                            </Button>
                                        ) }
                                        { project.docLink && (
                                            <Button
                                                href={ project.docLink }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="outline-light"
                                                className="flex-grow-1"
                                            >
                                                Docs
                                                <ArrowUpRight className="ms-2" size={ 16 }/>
                                            </Button>
                                        ) }
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )) }
                </Row>

                {/* Show More / Show Less Button */ }
                { hasMoreProjects && (
                    <div
                        className="text-center position-relative"
                        style={{ marginTop: showAll ? '2rem' : '-2rem', paddingTop: showAll ? 0 : '3rem' }}
                    >
                        {/* Fade gradient overlay */ }
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: '-1rem',
                                right: '-1rem',
                                height: showAll ? '0' : '150px',
                                background: 'linear-gradient(to bottom, transparent 0%, var(--bs-body-bg) 85%)',
                                pointerEvents: 'none',
                                transition: 'height 0.4s ease, opacity 0.4s ease',
                                opacity: showAll ? 0 : 1,
                            }}
                        />
                        <Button
                            variant="outline-secondary"
                            onClick={ () => setShowAll(!showAll) }
                            className="rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 position-relative"
                            style={{
                                zIndex: 1,
                                transition: 'all 0.2s ease',
                                backdropFilter: 'blur(4px)',
                            }}
                        >
                            { showAll ? "Show less" : `Show more` }
                            <ChevronDown
                                size={ 16 }
                                style={ {
                                    transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                } }
                            />
                        </Button>
                    </div>
                ) }
            </Container>
        </section>
    );
}
