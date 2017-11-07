const colors = {
  red: {
    default: '#F52C2C', // red
  },
  grey: {
    default: '#cccccc', // clouds
  },
  blue: {
    default: '#3ca2e0', // links
    dark: '#3F557F', // text
  },
  green: {
    default: '#22a36e', // green 1
  },
  yellow: {
    default: '#FFBB00', // light yellow
    warmer: '#FFA200', // secondary brand
  },
  white: {
    default: '#fff', // white
  },
};

const color = (name, shade = 'default') => {
  return colors[name] && colors[name][shade];
};

const colorsUi = {
  primary: color('blue'),
  secondary: color('grey'),
  link: color('blue'),
  text: color('blue', 'dark'),
};

const ui = name => colorsUi[name];

export { color, ui };
