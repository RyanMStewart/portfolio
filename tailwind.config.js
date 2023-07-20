/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: "#100A14",
      white: "#F8F8F4",
      gray: "#999997",
      yellow: "#EBE4A9",
    }),
    fontFamily: {
      base: "Playfair Display",
      caption: "Almarai",
    },
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at center, var(--tw-gradient-stops))",
      },
      fontSize: {
        "10xl": ["11em", 1],
      },
      minHeight: {
        screen: "calc(var(--vh,1vh)*100)",
      },
      height: {
        screen: "calc(var(--vh,1vh)*100)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
