module.exports = {
  important: true,
  //Purging for Production is configured in PostCSS Config
  purge: {
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    extend: {
      colors: {
        "rebel-yellow": {
          100: "rgb(255, 211, 68)",
        },
        "rebel-purple": {
          100: "#563e99",
        },
      },
      boxShadow: {
        "rebel-card": "0 35px 60px -15px rgb(255, 211, 68)",
      },
    },
  },
  variants: {},
  plugins: [],
};
