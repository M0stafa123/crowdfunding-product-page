/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.html", "./dist/*.js"],
  theme: {
    extend: {
      colors: {
        ModerateCyan: "hsl(176, 50%, 47%)",
        DarkCyan: "hsl(176, 72%, 28%)",
        DarkGray: "hsl(0, 0%, 48%)",
      },
      fontFamily: {
        Commissioner: ["Commissioner", "sans serif"],
      },
      backgroundImage: {
        img: "url('/images/image-hero-mobile.jpg')",
        imgdesk: "url('/images/image-hero-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
