import {} from 'styled-components';
import { ThemeType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    //Colors
    colors: {
      primary: string;
      secondary: string;
      third: string;
      thirdOpacity35: string;
      fourth: string;
      fifth: string;
      seventh: string;
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
      xxsmall: string;
      xsmall: string;
      small: string;
      regular: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    fontWeight: {
      light: number;
      medium: number;
      regular: number;
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
      large: string;
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
