/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#090b11',
          50: '#141925',
          100: '#283044',
          200: '#3d4663',
          300: '#505d84',
          400: '#6474a2',
          500: '#8490b5',
          600: '#a3acc8',
          700: '#c3cadb',
          800: '#e3e6ee',
          900: '#f3f4f7',
          999: '#ffffff',
          "999_basis": '0, 0%, 100%',
          999_40: 'hsla(var(--gray-999-basis), 0.4)',
        },
        accent: {
          light: '#c561f6',
          regular: '#7611a6',
          dark: '#1c0056',
          overlay: 'hsla(280, 89%, 67%, 0.33)',
          subtle_overlay: 'hsla(281, 81%, 36%, 0.33)',
          text_over: '#ffffff',
        },
        link: '#7611a6',
      },
      fontFamily: {
        body: ['Public Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
        brand: ['Rubik', 'system-ui'],
      },
      transitionTimingFunction: {
        'theme-transition': '0.2s ease-in-out',
      },
    },
  },
  plugins: [],
};