import { styled, css } from 'styled-components';

export const Cta = styled.div`
  ${({ theme }) => css`
    width: 16.125rem;
    height: 2.875rem;
    cursor: pointer;
    border: none;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.medium};
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.xsmall};
    transition: all ease-in-out 0.2s;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.secondary};
      text-decoration: none;
      text-align: center;
    }

    &:hover {
      background-color: ${theme.colors.primary};
      opacity: 0.9;
    }
  `}
`;
