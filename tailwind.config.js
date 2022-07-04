module.exports = {
  mode: "jit",
  content: ["./Views/**/*.cshtml"],
  theme: {
    screens: {
      "phone": "300px",
      "sm-tablet": "600px",
      "md-tablet": "768px",
      "lg-tablet": "900px",
      "sm-desk": "1024px",
      "sm-md-desk": "1200px",
      "md-desk": "1368px",
      "lg-desk": "1600px"
    },
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
        gudea: ["Gudea", "sans-serif"],
        IBMPSans: ["IBM Plex Sans", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}
