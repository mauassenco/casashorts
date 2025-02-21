import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#624DE3',
    secondary: '#ffffff',
    third: '#E5E5E5',
    thirdOpacity35: 'rgba(229, 229, 229, 0.35)',
    fourth: '#c4c4c4',
    fifth: '#4D5C6C',
    seventh: '#EFEFEF',
    backgroundOverlay: '#1F2933',
    title: '#1F2933',
    text: '#35424F',
    error: '#BB0A30',
  },

  fontFamily: {
    primary: 'Montserrat, sans-serif',
    secondary: 'Poppins, sans-serif',
  },
  fontSize: {
    xxsmall: '12px',
    xsmall: '14px',
    small: '16px',
    regular: '18px',
    medium: '20px',
    large: '24px',
    xlarge: '32px',
  },
  fontWeight: {
    light: 300,
    medium: 400,
    regular: 500,
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
    large: '16px',
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
