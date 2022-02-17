module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        inverseBlob: "inverseBlob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)"
          },
          "33%": {
            transform: "scale(1.2)"
          },
          "66%": {
            transform: "scale(0.9)"
          },
          "100%": {
            transform: "scale(1)"
          },
        },
        inverseBlob: {
          "0%": {
            transform: "scale(1)"
          },
          "33%": {
            transform: "scale(0.9)"
          },
          "66%": {
            transform: "scale(1.2)"
          },
          "100%": {
            transform: "scale(1)"
          },
        }
      }
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
}

