import styled, { css } from 'styled-components';

export const SignInContainer = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;
