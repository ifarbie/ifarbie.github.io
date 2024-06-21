import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/modules/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1B262C',
        secondary: "#0F4C75",
        accent: "#3282B8",
        colorText: "#BBE1FA"
      },
      animation: {
        wave: "wave 2s infinite ease",
        fadeIn: "fadeIn 1s forwards",
        fadeInFromRight: "fadeInFromRight 1s ease-in-out forwards",
        fadeInFromRight_1: "fadeInFromRight 1s ease-in-out forwards 0.2s",
        fadeInFromLeft: "fadeInFromLeft 1s ease-in-out forwards",
        fadeInFromUp: "fadeInFromUp 1s forwards",
        fadeInFromUp_1: "fadeInFromUp 1s ease-in-out forwards 1s",
        fadeInFromBot: "fadeInFromBot 1s ease-in-out forwards",
        fadeInFromBot_1: "fadeInFromBot 1s ease-in-out forwards 0.2s",
        zoomIn: "zoomIn 1s forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          }
        },
        wave: {
          "0%, 60%, 100%": {
            transform: "rotate(0deg)",
          },
          "10%, 30%": {
            transform: "rotate(14deg)",
          },
          "20%": {
            transform: "rotate(-8deg)",
          },
          "40%": {
            transform: "rotate(-4deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
        },
        fadeInFromRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(150%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInFromLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-150%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInFromUp: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateZ(0)",
          },
        },
        fadeInFromBot: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateZ(0)",
          },
        },
        zoomIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
