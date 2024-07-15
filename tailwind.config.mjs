/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: {
          0: "#090b11",
          50: "#141925",
          100: "#283044",
          200: "#3d4663",
          300: "#505d84",
          400: "#6474a2",
          500: "#8490b5",
          600: "#a3acc8",
          700: "#c3cadb",
          800: "#e3e6ee",
          900: "#f3f4f7",
          999: "#ffffff",
          "999_basis": "0, 0%, 100%",
          999_40: "hsla(var(--gray-999-basis), 0.4)",
        },
        accent: {
          light: "#c561f6",
          regular: "#7611a6",
          dark: "#1c0056",
          overlay: "hsla(280, 89%, 67%, 0.33)",
          subtle_overlay: "hsla(281, 81%, 36%, 0.33)",
          text_over: "#ffffff",
        },
        link: "#7611a6",
      },
      backgroundImage: {
        "gradient-subtle":
          "linear-gradient(150deg, var(--gray-900) 19%, var(--gray-999) 150%)",
        "gradient-accent":
          "linear-gradient(150deg, var(--accent-light), var(--accent-regular), var(--accent-dark))",
        "gradient-accent-orange":
          "linear-gradient(150deg, #ca7879, var(--accent-regular), var(--accent-dark))",
        "gradient-stroke":
          "linear-gradient(180deg, var(--gray-900), var(--gray-700))",
      },

      gradientColorStops: {
        "gradient-stop-1": "#c561f6",
        "gradient-stop-2": "#7611a6",
        "gradient-stop-3": "#1c0056",
      },
      boxShadow: {
        sm: "0px 6px 3px rgba(9, 11, 17, 0.01), 0px 4px 2px rgba(9, 11, 17, 0.01), 0px 2px 2px rgba(9, 11, 17, 0.02), 0px 0px 1px rgba(9, 11, 17, 0.03)",
        md: "0px 28px 11px rgba(9, 11, 17, 0.01), 0px 16px 10px rgba(9, 11, 17, 0.03), 0px 7px 7px rgba(9, 11, 17, 0.05), 0px 2px 4px rgba(9, 11, 17, 0.06)",
        lg: "0px 62px 25px rgba(9, 11, 17, 0.01), 0px 35px 21px rgba(9, 11, 17, 0.05), 0px 16px 16px rgba(9, 11, 17, 0.1), 0px 4px 9px rgba(9, 11, 17, 0.12)",
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        md: "1.125rem",
        lg: "1.25rem",
        xl: "1.625rem",
        "2xl": "2.125rem",
        "3xl": "2.625rem",
        "4xl": "3.5rem",
        "5xl": "4.5rem",
      },
      fontFamily: {
        body: [
          "Public Sans",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        brand: ["Rubik", "system-ui"],
      },
      transitionTimingFunction: {
        "theme-transition": "0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
