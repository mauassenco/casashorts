import { styled, css } from 'styled-components';

export const Cta = styled.div<{ $variant: 'default' | 'outline' }>`
  ${({ theme, $variant }) => css`
    width: 16.125rem;
    height: 2.875rem;
    cursor: pointer;
    border: solid ${theme.colors.primary} ${theme.border.medium};
    background-color: ${$variant === 'outline' ? 'transparent' : theme.colors.primary};
    color: ${$variant === 'outline' ? theme.colors.primary : theme.colors.secondary};
    border-radius: ${theme.borderRadius.medium};
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.xsmall};
    transition: all ease-in-out 0.3s;

    a,
    span {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: inherit;
      text-decoration: none;
      text-align: center;
    }
  `}
`;
