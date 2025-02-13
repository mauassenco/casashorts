import {} from 'styled-components';
import { ThemeType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    //Colors
    colors: {
      primary: string;
      secondary: string;
      third: string;
      fourth: string;
      backgroundOverlay: string;
      title: string;
      text: string;
      error: string;
    };
    //Fonts
    fontFamily: {
      primary: string;
      secondary: string;
    };
    fontSize: {
      xsmall: string;
      small: string;
      regular: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    fontWeight: {
      thin: number;
      regular: number;
      normal: number;
      semibold: number;
      bold: number;
    };
    // Borders
    border: {
      small: string;
      medium: string;
    };
    borderRadius: {
      small: string;
      medium: string;
    };
    // Shadows
    boxShadow: string;
    // Breakpoints
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
