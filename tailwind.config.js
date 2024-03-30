/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#000000",
        },
        accent: {
          light: "#fff",
        },
      },
    },
  },
  plugins: [],
};
