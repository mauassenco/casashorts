import styled, { css } from 'styled-components';
// import { theme } from '../../styles/theme';

export const MyLinksContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    padding: 1.75rem 1.375rem 4.5rem;
    background-color: ${theme.colors.secondary};

    form {
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
    }

    form > div:last-of-type {
      align-self: center;
      width: 276px;
      border-radius: ${theme.borderRadius.small};
    }

    label {
      font-size: ${theme.fontSize.small};
      font-weight: ${theme.fontWeight.regular};
    }

    label > span {
      font-size: ${theme.fontSize.xsmall};
    }

    ::placeholder {
      color: ${theme.colors.title};
      font-weight: ${theme.fontWeight.light};
    }

    button {
      cursor: pointer;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.secondary};
      border: solid ${theme.colors.primary} ${theme.border.medium};
      border-radius: ${theme.borderRadius.medium};
      font-weight: ${theme.fontWeight.medium};
      font-size: ${theme.fontSize.xsmall};
      width: 276px;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      text-align: center;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
    }
  `}
`;

export const SplitedContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    border: solid ${theme.border.small} ${theme.colors.fourth};
    border-radius: ${theme.borderRadius.small};
    position: relative;

    div {
      gap: 0;
    }

    p {
      border-right: solid ${theme.border.small} ${theme.colors.fourth};
      margin: 0;
      padding: 15px;
      font-weight: ${theme.fontWeight.medium};
    }

    div > input {
      border: none;
    }

    img {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
    }
  `}
`;
