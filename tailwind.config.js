module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 600: "#6b7280", 900: "#1e1e1e" },
        blue_gray: { 100: "#d1d5db", 800: "#374151", "100_01": "#d9d9d9" },
        black: { "900_0c": "#0000000c" },
        white: { A700: "#ffffff" },
      },
      boxShadow: { bs: "0px 1px  2px 0px #0000000c" },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
