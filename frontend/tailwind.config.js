/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Times New Roman', 'serif'],
        'sans': ['Arial', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        vintage: {
          "primary": "#2a2a2a",
          "secondary": "#f5f5f5",
          "accent": "#1f2937",
          "neutral": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9f9f9",
          "base-300": "#f0f0f0",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
};
