import { styled, css } from 'styled-components';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.header`
  position: relative;
  background-color: ${theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  border-bottom: solid ${theme.colors.third} ${theme.border.medium};
  padding: 0 1.5rem;

  @media (min-width: ${theme.breakpoints.desktop}) {
    height: 5.25rem;
    justify-content: space-between;
    padding: 0 6rem;
  }
`;

export const NavContainer = styled.nav<{ $hasUser: boolean }>`
  ${({ theme, $hasUser }) => css`
    li:last-child a,
    li:last-child {
      color: ${$hasUser ? theme.colors.error : theme.colors.primary};
    }
  `}
`;

export const HamburgerMenuButton = styled.button`
  position: absolute;
  background: none;
  right: 1.75rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;
export const ReturnArrow = styled.div`
  position: absolute;
  background: none;
  left: 1.75rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Logo = styled.div`
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    position: relative;
    color: ${theme.colors.title};
    font-size: ${theme.fontSize.regular};
    font-weight: ${theme.fontWeight.semibold};

    @media (max-width: ${theme.breakpoints.tablet}) {
      justify-content: center;
    }
  }
  p {
    color: ${theme.colors.title};
  }
  span {
    color: ${theme.colors.primary};
  }
`;

export const NavMenu = styled.nav`
  ${({ theme }) => css`
    display: none;
    @media (min-width: ${theme.breakpoints.desktop}) {
      display: flex;
    }
  `}
`;

export const HamburgerNavMenu = styled.ul<{ $isOpen: boolean }>`
  ${({ theme, $isOpen }) => css`
    position: fixed;
    top: -20px;
    right: ${$isOpen ? '0' : '-100%'};
    display: flex;
    flex-direction: column;
    gap: 2.75rem;
    width: 100%;
    max-width: 280px;
    height: 100vh;
    padding: 5rem 1.6rem;

    background-color: ${theme.colors.secondary};
    transition: right 0.3s ease-in-out;
    z-index: 1;

    a {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      display: none;
    }
  `}
`;

export const DesktopNavMenu = styled.ul<{ $isOpen: boolean }>`
  ${({ theme, $isOpen }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.desktop}) {
      position: absolute;
      top: 60px;
      opacity: ${$isOpen ? '1' : '0'};
      opacity: ${$isOpen ? 'visible' : 'hidden'};
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 190px;
      border-radius: ${theme.borderRadius.small};
      box-shadow: 0 4px 8px #c4c4c4;
      background-color: ${theme.colors.secondary};
      font-size: ${theme.fontSize.small};
      transition: all 0.3s ease-in-out;
      padding: 1.3rem;
      gap: 1.6rem;

      li {
        margin: 0;
      }

      a {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
  `}
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  ${({ $isOpen }) => css`
    display: ${$isOpen ? 'block' : 'none'};
    transition: all ease-in-out 0.9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
  `}
`;

export const NavItemContainer = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  list-style: none;
  text-decoration: none;
  font-weight: ${theme.fontWeight.medium};
  display: flex;
  align-items: center;
  gap: 0.65rem;

  a {
    text-decoration: none;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin-left: 2.8rem;
  }
`;

export const UserHeader = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoints.desktop}) {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-size: ${theme.fontSize.medium};

    button {
      all: unset;
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    h3 {
      font-weight: ${theme.fontWeight.medium};
    }

    button > p {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.primary};
    }
    button > img {
      aspect-ratio: auto 40 / 40;
    }
  }
`;
