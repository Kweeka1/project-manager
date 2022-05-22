module.exports = {
  mode: "jit",
  content: ["./Views/**/*.cshtml"],
  theme: {
    screens: {
      "phone": "300px",
      "tablet": "600px",
      "lg-tablet": "768px",
      "sm-desk": "1024px",
      "sm-md-desk": "1200px",
      "md-desk": "1368px",
      "lg-desk": "1600px"
    },
    extend: {},
  },
  plugins: [],
}