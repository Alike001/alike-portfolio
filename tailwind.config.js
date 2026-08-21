/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0F",
        indigo: "#6366F1",
        cyan: "#06B6D4",
        cloud: "#F1F5F9",
        card: "#111827",
        line: "#1E293B",
        muted: "#94A3B8"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        aura: "0 0 0 1px rgba(99, 102, 241, .16), 0 24px 90px rgba(6, 182, 212, .08)",
        cyan: "0 0 42px rgba(6, 182, 212, .18)",
        indigo: "0 0 42px rgba(99, 102, 241, .20)"
      },
      letterSpacing: {
        editorial: "-0.055em"
      }
    }
  },
  plugins: []
};
