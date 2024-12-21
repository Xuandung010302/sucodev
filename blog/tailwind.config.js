/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        custom: "1171px",
      },
      backgroundColor: {
        'custom-bg': '#F9F9FB',
      },
      textColor: {
        'txtGr': '#9B9B9B',
        'txtCreatePage': '#1D392D',
      },
    },
  },
  plugins: [
  ],
}
