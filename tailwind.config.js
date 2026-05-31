/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5B5AF7", // indigo (modern SaaS)
          dark: "#3F3DEB",    // hover/active
        },
        secondary: {
          DEFAULT: "#D39C3F", // amber (warm accent, not “cute”)
          dark: "#B67F2E",
        },
        accent: "#0F172A", // slate-900 (strong accent)
        app: {
          bg: "#F6F7FB",      // cool light background (kills the “period app” vibe)
          surface: "#FFFFFF", // cards/panels
          text: "#0F172A",    // main text (slate-900)
          muted: "#475569",   // secondary text (slate-600)
          border: "#E2E8F0",  // borders (slate-200)
        },
      },
    },
  },
  plugins: [],
};
