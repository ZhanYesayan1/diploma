/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#d0bdf4',
        bgSoft: '#494d5f',
        text: '#ffffff',
        textSoft: '#b7bac1',
      },
      // Add any other custom settings you need here
    },
  },
  plugins: [],
};
