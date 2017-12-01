const colors = {
  red: {
    default: '#E01010', // red
  },
  blue: {
    default: '#00AAFF', // links
  },
  green: {
    default: '#44CC29', // green 1
  },
  pink: {
    default: '#E010E0',
  },
  white: {
    default: '#fff', // white
  },
  grey: {
    default: '#212121', // clouds
    light: '#707070',
    lighten: '#9E9E9E',
    fade: '#F4F4F4',
  },
};

const color = (name, shade = 'default') => {
  return colors[name] && colors[name][shade];
};

const colorsUi = {
  primary: color('red'),
  secondary: color('pink'),
  link: color('blue'),
  text: color('grey'),
  textSecondary: color('grey, light'),
  disabled: color('grey, lighten'),
  background: color('grey, fade'),
};

const ui = name => colorsUi[name];

export { color, ui };
