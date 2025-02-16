import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const SignUpContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.875rem;
    padding: 6.25rem 0 4rem;
    background-color: ${theme.colors.secondary};
    text-align: center;

    h3 {
      color: ${theme.colors.text};
      font-size: ${theme.fontSize.regular};
      font-weight: ${theme.fontWeight.medium};
      font-family: ${theme.fontFamily.primary};
      margin-bottom: 1.875rem;
    }

    p {
      color: ${theme.colors.text};
      font-size: ${theme.fontSize.xsmall};
      font-weight: ${theme.fontWeight.medium};
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      padding: 6.25rem 5.25rem 8.25rem;

      div > img {
        width: 34.24rem;
      }

      h3 {
        font-size: ${theme.fontSize.large};
      }
    }
  `}
`;

export const GoogleButton = styled.div`
  ${({ theme }) => css`
    width: 19.5rem;
    height: 2.875rem;
    border-radius: ${theme.borderRadius.small};
    border: solid 1px ${theme.colors.primary};

    a {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      text-decoration: none;
    }

    p {
      font-family: ${theme.fontFamily.secondary};
    }
  `}
`;

export const Etc = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    justify-content: center;
    margin-bottom: 1.875rem;
    p {
      font-size: ${theme.fontSize.large};
    }
    img {
      width: 24px;
    }
  }
`;

export const SwitchAccess = styled.div`
  ${({ theme }) => css`
    p {
      font-family: ${theme.fontFamily.primary};
      font-weight: ${theme.fontWeight.regular};
    }

    a {
      color: ${theme.colors.primary};
      font-weight: ${theme.fontWeight.medium};
      cursor: pointer;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      p {
        font-size: ${theme.fontSize.small};
      }
    }
  `}
`;
