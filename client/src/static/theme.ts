import { DefaultTheme } from 'styled-components';
import i18n from 'i18next';

export const lightTheme: DefaultTheme = {
  i18n,

  isDarkMode: false,
  green: '#7ED956',

  fonts: {
    inputText: 'black',
    text: 'grey',
  },

  backgrounds: {
    primary: '#FFF', // white or grey
    secondary: '#FFF', // white or black
    thirdary: '#F5F5F5', // light grey or dark grey
    leftSide: 'radial-gradient(circle, rgba(96,199,133,1) 0%, rgba(67,227,125,1) 98%);', // green or black
  },
};

export const darkTheme: DefaultTheme = {
  i18n,

  isDarkMode: true,
  green: '#7ED956',

  fonts: {
    inputText: '#FFF',
    text: '#FFF',
  },

  backgrounds: {
    primary: '#212121',
    secondary: '#181818',
    thirdary: '#212121',
    leftSide: '#181818',
  },
};
