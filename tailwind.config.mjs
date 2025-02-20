/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004733",
        secondary: "#004733",
        accent: "#1EE007f",
        colorL: "#F0F7F1",
        colorD: "#CDE9D4",
        text: "#292b29",
        btnHover: "#017848",
      },
    },
  },
  plugins: [],
};
