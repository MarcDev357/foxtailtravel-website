/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: v('bg'),
        surface: v('surface'),
        ink: v('ink'),
        muted: v('muted'),
        line: v('line'),
        fox: v('fox'), // logo red: buttons, links, eyebrows
        'fox-ink': v('fox-ink'),
        flame: v('flame'), // tail orange: decorative accents
        gold: v('gold'), // tail gold: highlights on dark
        char: v('char'), // logo charcoal: text only
        dawn: v('dawn'), // soft peach: tinted sections
        glow: v('glow'), // warm gold light: highlights
      },
      fontFamily: {
        display: ['Rubik', 'Arial Black', 'system-ui', 'sans-serif'],
        script: ['Yellowtail', '"Brush Script MT"', 'cursive'],
        sans: ['"Nunito Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: { wrap: '72rem' },
      backgroundImage: {
        tail: 'linear-gradient(100deg, rgb(var(--fox)) 0%, rgb(var(--flame)) 60%, rgb(var(--gold)) 100%)',
        sunrise: 'linear-gradient(180deg, rgb(var(--glow) / 0.55) 0%, rgb(var(--dawn)) 45%, rgb(var(--bg)) 100%)',
        daybreak: 'linear-gradient(110deg, rgb(var(--dawn)) 0%, rgb(var(--glow)) 100%)',
      },
    },
  },
  plugins: [],
}
