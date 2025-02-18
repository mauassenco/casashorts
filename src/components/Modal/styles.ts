import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;

  @media (min-width: ${theme.breakpoints.desktop}) {
    align-items: center;
  }
`;

export const ModalContainer = styled.div<{ $modalActive: boolean }>`
  ${({ theme, $modalActive }) => css`
    position: fixed;
    bottom: ${$modalActive ? '0' : '-100%'};
    width: 100%;
    background-color: #fff;
    padding: 1rem;
    border-radius: ${theme.borderRadius.large} ${theme.borderRadius.large} 0 0;
    transition: bottom 0.3s ease-in-out;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: ${theme.fontSize.small};
      font-weight: ${theme.fontWeight.regular};
      color: ${theme.colors.title};
      margin-top: 2.5rem;
    }

    p {
      font-size: ${theme.fontSize.xsmall};
      font-weight: ${theme.fontWeight.medium};
      color: ${theme.colors.fifth};
      line-height: 136%;
      text-align: start;
      /* margin-bottom: 1.5rem; */
      margin: 0 0 1.5rem;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      width: auto;
      max-width: 30.7rem;
      position: relative;
      border-radius: ${theme.borderRadius.large};

      h2 {
        font-size: ${theme.fontSize.large};
      }

      p {
        font-size: ${theme.fontSize.small};
      }
    }
  `}
`;

export const ModalTopDash = styled.div`
  position: absolute;
  top: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 3.5rem;
  height: 0.3rem;
  background-color: ${theme.colors.fourth};
  border-radius: ${theme.borderRadius.small};

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  display: none;

  @media (min-width: ${theme.breakpoints.desktop}) {
    position: absolute;
    display: block;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
