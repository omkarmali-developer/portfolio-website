/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "screen-lg": "1024px",
        "screen-xl": "1280px",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      signature1: ["Playwrite HR Lijeva"],
    },
  },
  plugins: [],
};
