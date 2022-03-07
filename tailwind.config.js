module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        header: '#EEEEEE',
        body: '#D8D2CB',
        btn: '#398AB9',
        logo: '#1C658C',
      },
    },
  },
  plugins: [],
};
