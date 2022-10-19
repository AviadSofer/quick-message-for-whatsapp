import 'styled-components';
import i18n, { i18n } from 'i18next';

declare module 'styled-components' {
  export interface DefaultTheme {
    i18n: i18n,
    isDarkMode: boolean,
    green: string,

    fonts: {
      inputText: string,
      text: string,
    }

    backgrounds: {
      primary: string,
      secondary: string,
      thirdary: string,
      leftSide: string,
    }
  }
}
