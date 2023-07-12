/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tw-red": "hsl(10, 79%, 65%)",
        "tw-cyan": "hsl(186, 34%, 60%)",
        "tw-dark-brown": "hsl(25, 47%, 15%)",
        "tw-medium-brown": "hsl(28, 10%, 53%)",
        "tw-cream": "hsl(27, 66%, 92%)",
        "tw-pale-orange": "hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
