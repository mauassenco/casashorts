import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#624DE3',
    secondary: '#ffffff',
    third: '#E5E5E5',
    thirdOpacity35: 'rgba(229, 229, 229, 0.35)',
    fourth: '#c4c4c4',
    backgroundOverlay: '#1F2933',
    title: '#1F2933',
    text: '#35424F',
    error: '#BB0A30',
  },

  fontFamily: {
    primary: 'Montserrat, sans-serif',
    secondary: 'serif',
  },
  fontSize: {
    xsmall: '14px',
    small: '16px',
    regular: '18px',
    medium: '20px',
    large: '24px',
    xlarge: '32px',
  },
  fontWeight: {
    thin: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  border: {
    small: '1px',
    medium: '1.5px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
  },
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
  maxWidth: '1200px',
};
