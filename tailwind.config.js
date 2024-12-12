/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#163826", // Vert foncé
        secondary: "#285943", // Vert clair
        accent: "#f0f0f0", // Blanc cassé
        textPrimary: "#ffffff", // Texte blanc
        textSecondary: "#000000", // Texte noir
        "bleu-nuit": "#0b132b"
      },
      // fontFamily: {
      //   montserrat: ["Montserrat", "sans-serif"], // Pour les titres
      // },
      borderRadius: {
        xl: "12px",
        lg: "8px",
        md: "4px",
      },
    },
  },
  plugins: [],
};

