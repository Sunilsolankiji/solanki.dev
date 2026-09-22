import { Container, Row, Col, Card } from 'react-bootstrap';
import Reveal from '../Reveal';
import {
    AngularIcon,
    TypeScriptIcon,
    BootstrapIcon,
    ReactIcon,
    JavaScriptIcon,
    TailwindIcon,
    MaterialUIIcon,
    SassIcon,
    NextJSIcon,
    NodeJSIcon,
    HTML5Icon,
    CSS3Icon,
} from '../icons';
import { GitMerge } from 'lucide-react';

const skills = [
    { name: 'Angular', icon: <AngularIcon className="icon-lg"/> },
    { name: 'React', icon: <ReactIcon className="icon-lg"/> },
    { name: 'Next.js', icon: <NextJSIcon className="icon-lg"/> },
    { name: 'TypeScript', icon: <TypeScriptIcon className="icon-lg"/> },
    { name: 'JavaScript', icon: <JavaScriptIcon className="icon-lg"/> },
    { name: 'HTML5', icon: <HTML5Icon className="icon-lg"/> },
    { name: 'CSS3', icon: <CSS3Icon className="icon-lg"/> },
    { name: 'Tailwind CSS', icon: <TailwindIcon className="icon-lg"/> },
    { name: 'Bootstrap', icon: <BootstrapIcon className="icon-lg"/> },
    { name: 'Material UI', icon: <MaterialUIIcon className="icon-lg"/> },
    { name: 'Sass/SCSS', icon: <SassIcon className="icon-lg"/> },
    { name: 'Node.js', icon: <NodeJSIcon className="icon-lg"/> },
    { name: 'Git', icon: <GitMerge className="icon-lg text-primary"/> },
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding bg-body-tertiary">
            <Container>
                <Reveal as="div" className="text-center mb-5">
                    <div className="section-kicker">02 / toolbox</div>
                    <h2 className="display-5 fw-bold font-headline mb-3">My everyday stack.</h2>
                    <p className="lead text-secondary mx-auto" style={ { maxWidth: '900px' } }>
                        A practical frontend toolkit for turning product ideas into accessible, maintainable interfaces.
                    </p>
                </Reveal>
                <Row className="g-3 g-md-4 justify-content-center">
                            { skills.map((skill, index) => (
                        <Col key={ skill.name } xs={ 6 } sm={ 4 } md={ 3 } lg={ 2 }>
                                    <Reveal delay={ (index % 6) * 60 }>
                                        <Card className="h-100 text-center bg-body-secondary border-secondary skill-card">
                                            <Card.Body
                                                className="d-flex flex-column align-items-center justify-content-center gap-2">
                                                { skill.icon }
                                                <p className="fw-semibold mb-0 fs-6">{ skill.name }</p>
                                            </Card.Body>
                                        </Card>
                                    </Reveal>
                                </Col>
                            )) }
                        </Row>
            </Container>
        </section>
    );
}
