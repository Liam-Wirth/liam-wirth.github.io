/** @type {import('tailwindcss').Config} */
//TODO: Fix this, colors aren't working consistently between this file and the global.css file
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          0: "var(--gray-0)",
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
          999: "var(--gray-999)",
          '999_basis': "var(--gray-999-basis)",
          999_40: "var(--gray-999_40)",
          999: "var(--gray-999)",

        },
        accent: {
          light: "var(--accent-light)",
          regular: "var(--accent-regular)",
          dark: "var(--accent-dark)",
          overlay:"var(--accent-overlay)",
          subtle_overlay: "var(--accent-subtle-overlay)",
          text_over: "var(--accent-text-over)", 
        },
        link: "var(--accent-regular)", 
        gradient: {
          stop_1: "var(--gradient-stop-1)",
          stop_2: "var(--gradient-stop-2)",
          stop_3: "var(--gradient-stop-3)",
          subtle: "var(--gradient-subtle)",
          accent: "var(--gradient-accent)",
          accent_orange: "var(--gradient-accent-orange)",
          stroke: "var(--gradient-stroke)",
        },
        shadow: {

        }
      },
      backgroundImage: {
        'gradient-subtle':
          'linear-gradient(150deg, var(--gray-900) 19%, var(--gray-999) 150%)',
        'gradient-accent':
          'linear-gradient(150deg, var(--accent-light), var(--accent-regular), var(--accent-dark))',
        'gradient-accent-orange':
          'linear-gradient(150deg, #ca7879, var(--accent-regular), var(--accent-dark))',
        'gradient-stroke':
          'linear-gradient(180deg, var(--gray-900), var(--gray-700))',
      },

      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.625rem',
        '2xl': '2.125rem',
        '3xl': '2.625rem',
        '4xl': '3.5rem',
        '5xl': '4.5rem',
      },
      fontFamily: {
        body: [
          'Public Sans',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        brand: ['Rubik', 'system-ui'],
      },
      transitionTimingFunction: {
        'theme-transition': '0.2s ease-in-out',
      },
    },
  },
  plugins: [],
};
