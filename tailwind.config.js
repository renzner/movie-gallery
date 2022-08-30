/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#032640",
        overlay1: "rgba(31.5, 31.5, 31.5, 1)",
        overlay2: "rgba(31.5, 31.5, 31.5, 0.84)",
      },
      maxWidth: {
        81.25: "81.25rem",
      },
      backgroundImage: {
        banner:
          "linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%), url('./assets/images/banner.jpg')",
      },
    },
  },
  plugins: [],
};
