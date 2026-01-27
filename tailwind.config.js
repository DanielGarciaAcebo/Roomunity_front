/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F4BFCF",  // main soft rose
          dark: "#E08AA4",     // darker variant
        },
        secondary: {
          DEFAULT: "#E4C9A5",  // sand brown
          dark: "#B5835A",     // caramel brown
        },
        accent: "#8A5E3C",      // clay accent
        // neutrals
        app: {
          bg: "#F9F5F2",        // main background
          surface: "#FFFFFF",   // cards, panels
          text: "#1F2933",      // primary text
          muted: "#6B7280",     // secondary text
          border: "#E5E7EB",    // borders
        },
      },
    },
  },
  plugins: [],
};
