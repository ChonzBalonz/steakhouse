/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Cinzel", "serif"],
        body: ["Lora", "serif"],
      },
      backgroundImage: {
        "hero-steak": "url('/src/images/steak.gif')",
      },
    },
  },
  plugins: [],
};
