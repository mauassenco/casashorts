import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: ${theme.fontSize.small};
    color: ${theme.colors.title};

    label {
      font-weight: ${theme.fontWeight.regular};
    }

    input {
      width: 100%;
      border-radius: ${theme.borderRadius.small};
      border: solid ${theme.border.small} ${theme.colors.fourth};
      padding: 15px;
      font-weight: ${theme.fontWeight.medium};
    }

    input[type='text']:focus {
      outline: none;
      border: solid ${theme.border.small} ${theme.colors.primary};
    }
  `}
`;

export const ErrorStyled = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    text-transform: none;
    padding-top: 5px;
  `}
`;
