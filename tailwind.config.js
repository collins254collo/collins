module.exports = {
  darkMode: "class", // Enables 'class' strategy for dark mode
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Adjust paths based on your project
  theme: {
    extend: {
      animation: {
        bgMove: "bgMove 5s ease-in-out infinite alternate",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        bgMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
