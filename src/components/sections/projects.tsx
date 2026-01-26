import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        title: "JavaScript Gantt",
        description:
            "A lightweight, interactive Gantt chart component built with vanilla JavaScript, offering a simple way to visualize project timelines.",
        image: "images/jsgantt.png",
        tags: ["JavaScript", "HTML", "CSS"],
        codeLink: "https://github.com/SunilSolankiji/javascriptgantt",
        demoLink: "https://sunilsolankiji.github.io/javascriptgantt/",
        docLink: "https://sunilsolankiji.github.io/js-gantt-docs/",
    },
    {
        title: "TourJS",
        description:
            "A guided tour/onboarding library enabling developers to create step-by-step walkthroughs for any web application, Improved user learning and navigation through interactive UI overlays.",
        image: "images/jstour.png",
        tags: ["JavaScript", "HTML", "CSS"],
        codeLink: "https://github.com/Sunilsolankiji/tourjs",
        demoLink: "https://sunilsolankiji.github.io/javascriptgantt/",
    },
    {
        title: "DropFile",
        description:
            "A modern file upload and management library with drag-and-drop support, file preview, and cloud storage integration. Built to make file handling seamless and user-friendly across web applications with real-time upload progress tracking.",
        image: "images/dropfile.png",
        tags: ["JavaScript", "React", "TypeScript", "File Upload"],
        codeLink: "https://github.com/Sunilsolankiji/DropFile",
        demoLink: "https://sunilsolankiji.github.io/DropFile/"
    },
    {
        title: "Angular UI Component Library",
        description: `A scalable Angular UI Component Library. Built reusable components (tables, forms, dialogs, charts, layout modules, dynamic UI elements and more) to standardize the design system. Reduced project development time by enabling teams to plug-and-play pre-built, customizable UI components.`,
        image: "images/angular-ui-lib.png",
        tags: ["Angular", "TypeScript", "HTML", "CSS"],
    },
];

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

                {/* Show More / Show Less Button */}
                { hasMoreProjects && (
                    <div className="text-center mt-5">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={ () => setShowAll(!showAll) }
                            className="d-flex align-items-center justify-content-center gap-2 mx-auto"
                        >
                            { showAll ? (
                                <>
                                    Show Less
                                    <ChevronDown className="rotate-180" size={ 20 } style={ { transform: 'rotate(180deg)' } } />
                                </>
                            ) : (
                                <>
                                    Show More Projects
                                    <ChevronDown size={ 20 } />
                                </>
                            ) }
                        </Button>
                    </div>
                ) }
            </Container>
        </section>
    );
}
