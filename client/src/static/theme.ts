import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  isDarkMode: false,
  green: '#7ED956',

  fonts: {
    inputText: 'black',
    text: 'grey',
  },

  backgrounds: {
    primary: '#FFF', // white or black
    secondary: '#FFF', // white or grey
    thirdary: '#F5F5F5', // grey or black
    leftSide: 'radial-gradient(circle, rgba(96,199,133,1) 0%, rgba(67,227,125,1) 98%);', // green or grey
  },
};

export const darkTheme: DefaultTheme = {
  isDarkMode: true,
  green: '#7ED956',

  fonts: {
    inputText: '#FFF',
    text: '#FFF',
  },

  backgrounds: {
    primary: '#181818',
    secondary: '#212121',
    thirdary: '#181818',
    leftSide: '#212121',
  },
};
