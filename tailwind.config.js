/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      sans: [
        'Noto Sans TC',
        'Microsoft JhengHei',
        'PingFang TC',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        primary: '#008080', // 先前淺色品牌色
        secondary: '#FFD700',
        'gray-750': '#23272f',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom right, #008080, #FFD700)',
      },
    },
  },
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [],
}

