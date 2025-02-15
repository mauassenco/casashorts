import { styled, css } from 'styled-components';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary};
    width: 100%;
    height: 2.5rem;
    padding: 0 1.5rem;

    p {
      color: ${theme.colors.secondary};
      font-size: ${theme.fontSize.xxsmall};
    }
    @media (min-width: ${theme.breakpoints.desktop}) {
      height: 5rem;
      padding: 0 6rem;

      p {
        font-size: ${theme.fontSize.small};
      }
    }
  `}
`;
