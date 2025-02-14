import { styled, css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    background-color: ${theme.colors.primary};
    border: none;
    border-radius: 4px;
    color: ${theme.colors.secondary};
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.xsmall};
    transition: all ease-in-out 0.2s;
    width: 100%;
    height: 2.9rem;
    max-width: 16.125rem;

    &:hover {
      background-color: ${theme.colors.third};
    }
  `}
`;
