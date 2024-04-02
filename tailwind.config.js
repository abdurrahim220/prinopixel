/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FCFCFF",
        },
        action: {
          heading: "#00156A", //!heading text title
          subHeading: "#0d6efd", //! light sub heading text title
          desc: "#212539", //! description text title
        },
        accent: {
          light: "#c4d0ff", //!Background color some section
          light2: "#F0F0FF", //!Background color some section
          dark: "#0654c4",
        },
        secandary:{
          light: "#0a58ca"
        }
      },
      fontSize: {
        "title-sm": ["14px", "26px"],
        "title-sm2": ["16px", "28px"],
        "title-sm3": ["18px", "30px"],
        "title-md": ["20px", "30px"],
        "title-md2": ["22px", "35px"],
        "title-md3": ["25px", "35px"],
        "title-md4": ["30px", "45px"],
        "title-lg": ["36px", "54px"],
      },
    },
  },
  plugins: [],
};
