import { useRef, type MouseEvent, type ReactNode } from 'react';

interface MagneticButtonProps {
	children: ReactNode;
	className?: string;
	strength?: number;
}

export default function MagneticButton({ children, className = '', strength = 0.35 }: MagneticButtonProps) {
	const ref = useRef<HTMLDivElement>(null);
	const frame = useRef<number | null>(null);

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		const el = ref.current;
		if (!el) return;
		if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

		const rect = el.getBoundingClientRect();
		const x = (e.clientX - rect.left - rect.width / 2) * strength;
		const y = (e.clientY - rect.top - rect.height / 2) * strength;

		if (frame.current !== null) cancelAnimationFrame(frame.current);
		frame.current = requestAnimationFrame(() => {
			el.style.transition = 'none';
			el.style.transform = `translate(${x}px, ${y}px)`;
		});
	};

	const handleMouseLeave = () => {
		const el = ref.current;
		if (!el) return;
		if (frame.current !== null) cancelAnimationFrame(frame.current);
		const prefersReducedMotion =
			typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		el.style.transition = prefersReducedMotion ? 'none' : 'transform .4s cubic-bezier(.34, 1.56, .64, 1)';
		el.style.transform = 'translate(0, 0)';
	};

	return (
		<div
			ref={ref}
			className={`magnetic-btn ${className}`}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</div>
	);
}
