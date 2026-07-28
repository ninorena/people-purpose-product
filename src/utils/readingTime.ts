// Build-time reading-time estimate from a post's raw markdown body.
// 200 words per minute, rounded to the nearest minute, never below 1.
const WORDS_PER_MINUTE = 200;

export function readingTimeMinutes(markdown: string): number {
	const text = markdown
		// drop fenced code blocks so code doesn't inflate the count
		.replace(/```[\s\S]*?```/g, ' ')
		// keep link text, drop the URL: [text](url) -> text
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		// drop bare URLs
		.replace(/https?:\/\/\S+/g, ' ')
		// drop markdown punctuation that would glue words together
		.replace(/[#*_`>~-]+/g, ' ');
	const words = text.split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
