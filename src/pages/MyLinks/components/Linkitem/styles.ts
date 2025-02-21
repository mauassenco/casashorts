import styled, { css } from 'styled-components';

interface KebabMenuProps {
  $isOpen: boolean;
}

export const LinkItemContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `}
`;

export const LinkItemIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;

  button {
    all: unset !important;
    cursor: pointer;
  }
`;

export const KebabMenu = styled.div<KebabMenuProps>`
  ${({ $isOpen }) => css`
    position: absolute;
    right: 0;
    top: 12px;
    background-color: transparent;
    display: none;
    ${$isOpen &&
    `
      display: block;
    `}
  `}
`;
