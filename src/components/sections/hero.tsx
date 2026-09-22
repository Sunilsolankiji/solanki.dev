import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function Hero() {
    const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading');
    const [mounted, setMounted] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const profileImage = 'images/me.png';
    const placeholderImage = 'images/me-placeholder.jpeg';

    useEffect(() => {
        const id = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(id);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        sectionRef.current?.style.setProperty('--spot-x', `${x}%`);
        sectionRef.current?.style.setProperty('--spot-y', `${y}%`);
    };

    return (
        <section
            id="home"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="hero-section d-flex align-items-center justify-content-center"
        >
            <Container>
                <Row className="g-4 g-lg-5 align-items-center">
                    <Col lg={ 6 } className={`order-2 order-lg-1 hero-reveal ${mounted ? 'hero-reveal-in' : ''}`}>
                        <div className="mb-4">
                            <div className="eyebrow greeting mb-3">नमस्ते,</div>
                            <h1 className="display-4 fw-bold font-headline mb-3">
                                I'm <span className="text-accent hero-name-gradient">Sunil Solanki</span>
                            </h1>
                            <div className="eyebrow availability"><span className="status-dot" /> Available for select opportunities</div>
                            <p className="hero-subtitle text-secondary">
                                Frontend engineer crafting thoughtful, high-performance interfaces and developer tools with Angular, React, TypeScript, and JavaScript.
                            </p>
                            <div className="hero-meta text-secondary">
                                <span><MapPin size={15} /> India · working globally</span>
                                <span className="meta-divider" />
                                <span>4+ years building for the web</span>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row gap-2">
                            <Button href="#projects" variant="primary" size="lg">
                                Explore my work
                                <ArrowUpRight className="ms-2" size={ 16 }/>
                            </Button>
                            <Button href="#contact" variant="outline-secondary" size="lg">
                                Let's connect
                            </Button>
                        </div>
                        <div className="hero-proof" aria-label="Career highlights">
                            <div><strong>4+</strong><span>years building</span></div>
                            <div><strong>30+</strong><span>projects supported</span></div>
                            <div><strong>∞</strong><span>curiosity shipped</span></div>
                        </div>
                    </Col>
                    <Col lg={ 6 } className={`order-1 order-lg-2 text-center hero-reveal hero-reveal-delay ${mounted ? 'hero-reveal-in' : ''}`}>
                        <div className="hero-visual">
                            <div className="code-card">
                                <div className="code-card-bar"><span /><span /><span /><small>sunil.ts</small></div>
                                <div className="code-card-content">
                                    <span className="code-muted">const</span> <span className="code-blue">developer</span> = {'{'}<br />
                                    <span className="code-indent">name: <span className="code-green">'Sunil Solanki'</span>,</span><br />
                                    <span className="code-indent">focus: <span className="code-green">'great UX'</span>,</span><br />
                                    <span className="code-indent">ships: <span className="code-purple">true</span></span><br />
                                    {'}'};
                                </div>
                            </div>
                            <div className="hero-image-wrapper">
                            { imageState !== 'loaded' && (
                                <img
                                    src={ placeholderImage }
                                    alt=""
                                    aria-hidden="true"
                                    className="hero-image placeholder"
                                />
                            ) }

                            { imageState !== 'error' && (
                                <img
                                    src={ profileImage }
                                    alt="Sunil Solanki"
                                    className={ `hero-image main-image ${ imageState === 'loaded' ? 'loaded' : '' }` }
                                    onLoad={ () => setImageState('loaded') }
                                    onError={ () => setImageState('error') }
                                />
                            ) }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
