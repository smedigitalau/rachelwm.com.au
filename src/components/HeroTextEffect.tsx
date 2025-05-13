import { TextEffect } from "./motion-primitives/text-effect";

export function HeroTextEffect() {
	return (
		<div>
			<h1 className="text-6xl md:text-8xl font-heading">
				<TextEffect per="char" preset="fade" speedReveal={0.4}>
					PAUSE
				</TextEffect>
			</h1>
			<h1 className="pt-4 text-6xl md:text-8xl font-heading">
				<TextEffect per="char" preset="fade" speedReveal={0.4} delay={0.4}>
					2025
				</TextEffect>
			</h1>
		</div>
	);
}
