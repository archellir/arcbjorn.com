module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Mono", "font-mono"],
      },
      height: {
        "1/10": "10%",
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
