/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ab6fe3",  // main soft rose
          dark: "#9237b6",     // darker variant
        },
        secondary: {
          DEFAULT: "#cd994e",  // sand brown
          dark: "#936532",     // caramel brown
        },
        accent: "#6D452B",      // clay accent
        // neutrals
        app: {
          bg: "#F2EAE6",        // main background
          surface: "#FFFDFB",   // cards, panels
          text: "#1B1F24",      // primary text
          muted: "#55606B",     // secondary text
          border: "#D8D1CC",    // borders
        },
      },
    },
  },
  plugins: [],
};
