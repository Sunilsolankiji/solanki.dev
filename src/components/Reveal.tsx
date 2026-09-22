import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react';

interface RevealProps {
	children: ReactNode;
	as?: ElementType;
	className?: string;
	delay?: number;
	once?: boolean;
}

export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, once = true }: RevealProps) {
	const ref = useRef<HTMLElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		if (typeof IntersectionObserver === 'undefined') {
			setVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					if (once) observer.unobserve(node);
				} else if (!once) {
					setVisible(false);
				}
			},
			{ threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [once]);

	return (
		<Tag
			ref={ref}
			className={`reveal ${visible ? 'reveal-in' : ''} ${className}`}
			style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
		>
			{children}
		</Tag>
	);
}
