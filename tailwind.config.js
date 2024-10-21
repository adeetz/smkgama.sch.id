/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}"  // Tambahkan ekstensi JSX dan TSX jika menggunakan React/TypeScript
    ],
    theme: {
      extend: {
        colors: {
          primary: "#ffcf3a",
          secondary: "#0063ff", 
        },
        container: {
          center: true,
          padding: {
            DEFAULT: "1rem",  // Ubah "default" menjadi "DEFAULT"
            sm: "2rem",
            lg: "4rem",  // Perbaiki format padding
            xl: "5rem",
            "2xl": "6rem",
          }
        }
      },
    },
    plugins: [],
  }
  
  