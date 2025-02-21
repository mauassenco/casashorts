import { styled, css } from 'styled-components';

export const Button = styled.button<{ type?: 'submit' | 'button' }>`
  ${({ theme }) => css`
    cursor: pointer;
    background-color: ${theme.colors.primary};
    border: none;
    border-radius: ${theme.borderRadius.medium};
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.xsmall};
    transition: all ease-in-out 0.2s;
    width: 100%;
    height: 2.9rem;
    max-width: 16.125rem;
    text-decoration: none;
    color: ${theme.colors.secondary};

    &:hover {
      background-color: ${theme.colors.primary};
      opacity: 0.9;
    }
  `}
`;
