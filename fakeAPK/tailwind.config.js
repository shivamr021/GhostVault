/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Poppins", "Orbitron", "sans-serif"],
        poppins: ["Poppins", "Inter", "Orbitron", "sans-serif"],
        orbitron: ["Orbitron", "Poppins", "Inter", "sans-serif"],
      },
      textShadow: {
        white: '2px 2px 4px rgba(255, 255, 255, 0.8)',
        glow: '0 0 10px rgba(255, 255, 255, 1)',
      },
      keyframes: {
        "move-vertical": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 2000px" },
        },
        "move-horizontal": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "2000px 0" },
        },
        "drift": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        "move-vertical": "move-vertical 30s linear infinite",
        "move-horizontal": "move-horizontal 60s linear infinite",
        "drift-slow": "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [
     require('tailwindcss-textshadow'),
  ],
}

