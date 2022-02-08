import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
        colors: {
          bg: string, font: string;
        },
        fonts: {
          first: string;
        }
      }
}
