import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        tilt: "tilt 4s infinite",
        wave: "wave 2s infinite ease",
        fadeInFromRight: "fadeInFromRight 1s ease-in-out forwards",
        fadeInFromLeft: "fadeInFromLeft 1s ease-in-out forwards",
        fadeInFromUp: "fadeInFromUp 1s ease-in-out forwards",
        fadeInFromBot: "fadeInFromBot 1s ease-in-out forwards",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "scale(1)",
          },
          "25%": {
            transform: "scale(1.01)",
          },
          "75%": {
            transform: "scale(0.99)",
          },
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
      },
    },
  },
  plugins: [],
};
export default config;
