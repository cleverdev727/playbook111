module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'warning': '#FFC726',
        'light-warning': '#FFEEC1',
        'middle-light-warning': '#DB9B2A',
        'middle-lighter-warning': '#FFE192',
        'lighter-warning': '#FFF8E6',
        'lightest-warning': '#FFF4D8',
        'more-light-warning': 'rgba(255, 199, 38, 0.3)',
        'most-light-warning': 'rgba(225, 176, 16, 0.3)',
        'muted': '#AEAEAE',
        'header-bg': '#303030',
        'light-dark': '#474747',
        'light-blue': '#9AD6FF',
        'blue': '#36A0EB',
        'lighter-blue': '#314655',
        'lightest-blue': '#D7ECFB',
        'blue-bg': 'rgba(54, 160, 235, 0.4)',
        'light-pink': '#FFC0CE',
        'lighter-pink': '#594146',
        'lightest-pink': '#FFE7EC',
        'pink': '#FF87A1',
        'pink-bg': 'rgba(255, 135, 161, 0.4)',
        'dark-row-bg': '#464646',
        'row-hover-bg': 'rgba(255, 199, 38, 0.1)',
        'square-border': 'rgba(255, 255, 255, 0.2)',
        'input-color': 'rgba(255, 255, 255, 0.3)',
        'dark-row-border': 'rgba(255, 255, 255, 0.5)',
        'secondary': '#7B7B7B',
        'light-secondary': '#7A7A7A',
        'lighter-secondary': '#6C6C6C',
        'light-grey': '#D9D9D9',
        'danger': '#FF5151',
        'light-danger': '#FF3D65',
        'success': '#1ABA00',
        'modal-background': 'rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        'sans': 'Open Sans',
        'montserrat': 'Montserrat',
      },
      backgroundImage: {
        'ribbon': 'url(./assets/imgs/ribbon.png)',
      },
      backgroundSize: {
        '100%': '100% 100%',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}