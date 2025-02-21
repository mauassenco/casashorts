import styled, { css } from 'styled-components';

export const TableContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-radius: ${theme.borderRadius.small} ${theme.borderRadius.small} 0 0;
  `}
`;

export const TableHeader = styled.div`
  ${({ theme }) => css`
    height: 48px;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.small} ${theme.borderRadius.small} 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: ${theme.colors.secondary};
      font-size: ${theme.fontSize.small};
      font-weight: ${theme.fontWeight.regular};
    }

    select {
      height: 40px;
      border-radius: ${theme.borderRadius.small};
      padding: 0 1rem;
      inset: none;
    }

    select:focus {
      outline: none;
      border: 1px solid ${theme.colors.primary};
    }
  `}
`;

export const TableHeaderCell = styled.div`
  padding: 0 1rem;
`;

export const TableBody = styled.div``;

export const TableRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 65px;

    &:nth-child(odd) {
      background-color: ${theme.colors.seventh};
    }
  `}
`;
