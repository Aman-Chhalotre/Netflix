/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login_page_banner' : "url(./src/assets/images/login_page_banner.jpg)"
      }
    },
  },
  plugins: [],
}

