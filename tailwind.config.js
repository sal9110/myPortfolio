module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        newblue: {
          light: "#E0FBFC",
          DEFAULT: "#98C1D9",
          dark: "#3D5A80",
        },
        orange: {
          DEFAULT: "#EE6C4D",
        },
        newblack: {
          DEFAULT: "#293241",
        },
      },
    },
    fontFamily: {
      sans: ["Dongle", "sans-serif"],
      mochiy: ["Mochiy Pop One", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
}
