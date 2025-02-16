import { styled, css } from 'styled-components';

export const Logo = styled.div`
  ${({ theme }) => css`
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 4px;
      position: relative;
      color: ${theme.colors.title};
      font-size: ${theme.fontSize.regular};
      font-weight: ${theme.fontWeight.semibold};

      @media (max-width: ${theme.breakpoints.tablet}) {
        justify-content: center;
      }
    }
    p {
      color: ${theme.colors.title};
    }
    span {
      color: ${theme.colors.primary};
    }
  `}
`;
