/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '10px', 
        },
        screens: {
          'xl': '1420px', // Updated max width for 'xl' breakpoint
        },
      },
    },
  },
  plugins: [],
}
