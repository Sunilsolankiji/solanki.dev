import { useEffect, useState, useMemo, useRef } from 'react';
import { Rocket } from 'lucide-react';

export default function ScrollPath() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = totalHeight > 0 ? Math.min((scrolled / totalHeight) * 100, 100) : 0;

      setScrollDirection(scrolled > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = scrolled;
      setScrollProgress(progress);
      setIsScrolling(true);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const pathProgress = scrollProgress / 100;

  // Smooth eased wave motion
  const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;
  const wave = Math.sin(easeInOutSine(pathProgress) * Math.PI * 4) * 0.85;

  // Rocket position calculations
  const rocketY = 4 + (pathProgress * 92);
  const rocketX = 50 + wave * 25;
  const baseRotation = scrollDirection === 'down' ? 90 : -90;
  const rocketRotation = baseRotation + wave * 30;

  // Section markers
  const sections = useMemo(() => [
    { name: 'Home', y: 4 },
    { name: 'About', y: 27 },
    { name: 'Skills', y: 50 },
    { name: 'Work', y: 73 },
    { name: 'Contact', y: 96 }
  ], []);

  const currentSectionIndex = Math.min(Math.floor(pathProgress * 5), 4);

  // The curved path definition
  const pathD = "M 50,4 C 90,10 90,24 50,27 C 10,30 10,47 50,50 C 90,53 90,70 50,73 C 10,76 10,93 50,96";

  return (
    <div className="scroll-path-container">
      <svg
        className="scroll-path-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradient for the path */}
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d6efd" />
            <stop offset="50%" stopColor="#0dcaf0" />
            <stop offset="100%" stopColor="#20c997" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background faint path */}
        <path
          d={pathD}
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="0.2"
          strokeLinecap="round"
          strokeDasharray="1,4"
          opacity="0.15"
        />

        {/* Main dotted path */}
        <path
          className="scroll-path-main"
          d={pathD}
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="0.4"
          strokeLinecap="round"
          strokeDasharray="2,3"
          filter="url(#softGlow)"
          opacity="0.4"
        />

        {/* Progress path that fills as you scroll */}
        <path
          className="scroll-path-progress"
          d={pathD}
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="0.5"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset={100 - (pathProgress * 100)}
          filter="url(#strongGlow)"
          opacity="0.9"
        />

        {/* Section dots */}
        {sections.map((section, index) => {
          const isPassed = pathProgress >= (index * 0.25);
          const isActive = currentSectionIndex === index;

          return (
            <g key={section.name}>
              {/* Pulse ring for active section */}
              {isActive && (
                <circle
                  className="dot-pulse"
                  cx={50}
                  cy={section.y}
                  r="3.5"
                  fill="none"
                  stroke="url(#pathGradient)"
                  strokeWidth="0.15"
                />
              )}

              {/* Outer ring */}
              {isPassed && (
                <circle
                  cx={50}
                  cy={section.y}
                  r={isActive ? "2.5" : "1.8"}
                  fill="none"
                  stroke="url(#pathGradient)"
                  strokeWidth={isActive ? "0.25" : "0.15"}
                  opacity={isActive ? 0.8 : 0.35}
                  filter={isActive ? "url(#softGlow)" : ""}
                />
              )}

              {/* Center dot */}
              <circle
                className={isActive ? 'dot-active' : ''}
                cx={50}
                cy={section.y}
                r={isActive ? "1.4" : isPassed ? "1" : "0.6"}
                fill={isPassed ? "url(#pathGradient)" : "#0d6efd"}
                opacity={isPassed ? 1 : 0.25}
                filter={isPassed ? "url(#softGlow)" : ""}
              />
            </g>
          );
        })}
      </svg>

      {/* Rocket indicator */}
      <div
        className={`scroll-rocket ${isScrolling ? 'active' : ''}`}
        style={{
          top: `${rocketY}%`,
          left: `${rocketX}%`,
          transform: `translate(-50%, -50%) rotate(${rocketRotation}deg)`
        }}
      >
        <div className="rocket-halo" />
        <div className="rocket-exhaust">
          <span /><span /><span />
        </div>
        <Rocket size={12} strokeWidth={2.5} />
      </div>

      {/* Section name badge */}
      <div className={`section-badge ${isScrolling ? 'show' : ''}`}>
        {sections[currentSectionIndex].name}
      </div>
    </div>
  );
}
