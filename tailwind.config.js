/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui'],
        body: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        ink: '#0f1115',
        fog: '#f5f4f0',
        mist: '#e6e3dc',
        tide: '#117a65',
        clay: '#c46d2d',
        dusk: '#2d3956',
      },
      boxShadow: {
        card: '0 20px 45px -25px rgba(17, 122, 101, 0.35)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(17, 122, 101, 0.18), transparent 55%)',
        'grid-lines': 'linear-gradient(90deg, rgba(15, 17, 21, 0.04) 1px, transparent 1px), linear-gradient(rgba(15, 17, 21, 0.04) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        reveal: {
          '0%': { opacity: 0, transform: 'translateY(14px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        reveal: 'reveal 0.8s ease-out both',
      },
    },
  },
  plugins: [],
}

