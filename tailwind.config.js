export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#171412",
        charcoal: "#24201D",
        cream: "#F4EFE7",
        warmwhite: "#FAF8F4",
        taupe: "#B8AA9A",
        terracotta: "#A65D45",
        clay: "#C97B5F",
        olive: "#5F6253",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      boxShadow: {
        soft: "0 24px 60px -24px rgba(23, 20, 18, 0.25)",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
