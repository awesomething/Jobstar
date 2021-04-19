module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
      extend: {
        screens: {
          xs: "375px",
          sm: "425px",
          md: "768px",
          lg: "1020px",
          xl: "1280px",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  