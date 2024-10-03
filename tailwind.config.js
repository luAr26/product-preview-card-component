/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)"],
      serif: ["var(--font-serif)"],
    },
    colors: {
      primary: "var(--color-primary)",
      "primary-dark": "var(--color-primary-dark)",
      secondary: "var(--color-secondary)",
      dark: "var(--color-dark)",
      "pure-white": "var(--color-pure-white)",
    },
    fontSize: {
      subtitle: ["0.75rem", { lineHeight: "1.25", letterSpacing: "5px" }],
      title: ["2rem", { lineHeight: "1" }],
      body: ["0.875rem", { lineHeight: "1.642857" }],
    },
  },
  plugins: [],
};
