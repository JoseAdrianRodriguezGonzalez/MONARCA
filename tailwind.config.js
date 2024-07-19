/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens:{
        'sm':'200px',
        'md':'600px',
        'lg':'1024',
        'xl':'2048'
      }
    },
  },
  plugins: [],
}

