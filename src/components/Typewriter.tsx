import { useEffect, useState } from 'react';

interface TypewriterProps {
	words: string[];
	className?: string;
	typingSpeed?: number;
	deletingSpeed?: number;
	pauseTime?: number;
}

export default function Typewriter({
	words,
	className = '',
	typingSpeed = 80,
	deletingSpeed = 40,
	pauseTime = 1800,
}: TypewriterProps) {
	const [wordIndex, setWordIndex] = useState(0);
	const [text, setText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const prefersReducedMotion =
			typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (prefersReducedMotion) {
			setText(words[0] ?? '');
			return;
		}

		const currentWord = words[wordIndex % words.length];
		let timeout: ReturnType<typeof setTimeout>;

		if (!isDeleting && text === currentWord) {
			timeout = setTimeout(() => setIsDeleting(true), pauseTime);
		} else if (isDeleting && text === '') {
			setIsDeleting(false);
			setWordIndex((prev) => (prev + 1) % words.length);
		} else {
			const nextText = isDeleting
				? currentWord.slice(0, text.length - 1)
				: currentWord.slice(0, text.length + 1);
			timeout = setTimeout(() => setText(nextText), isDeleting ? deletingSpeed : typingSpeed);
		}

		return () => clearTimeout(timeout);
	}, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

	return (
		<span className={`typewriter ${className}`}>
			{text}
			<span className="typewriter-cursor" aria-hidden="true">|</span>
		</span>
	);
}
