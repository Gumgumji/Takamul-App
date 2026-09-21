/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0f3d2e",
          DEFAULT: "#12513c",
          light: "#1e7a55",
          accent: "#25a06a",
        },
      },
      fontFamily: {
        sans: ["Cairo", "Tajawal", "sans-serif"],
      },
    },
  },
  plugins: [],
}
