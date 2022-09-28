import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
