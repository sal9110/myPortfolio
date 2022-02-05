module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // E0FBFC
        newblue: {
          light: "#E0FBFC",
          DEFAULT: "#98C1FF",
          dark: "#3D5A80",
        },
        orange: {
          light: "#FC9A4D",
          DEFAULT: "#EE6C4D",
          dark: "#EE6C3F",
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
