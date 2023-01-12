/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "grad-light-0": "#80FFDB",
        "grad-light-1": "#72EFDD",
        "grad-light-2": "#64DFDF",
        "grad-light-3": "#56CFE1",
        "grad-light-4": "#48BFE3",
        "grad-light-5": "#5390D9",
        "grad-light-6": "#5E60CE",
        "grad-light-7": "#6930C3",
        "grad-light-8": "#7400B8",
        "grad-dark-0": "#F8F9FA",
        "grad-dark-1": "#E9ECEF",
        "grad-dark-2": "#DEE2E6",
        "grad-dark-3": "#CED4DA",
        "grad-dark-4": "#ADB5BD",
        "grad-dark-5": "#6C757D",
        "grad-dark-6": "#495057",
        "grad-dark-7": "#343A40",
        "grad-dark-8": "#212529",
      },
    },
  },
  plugins: [],
};
