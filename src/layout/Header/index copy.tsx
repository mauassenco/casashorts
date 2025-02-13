import { useState } from 'react';
import HamburgerMenuIcon from '../../assets/icons/svg/icon-hamburger-menu.svg';
import LinkIconDark from '../../assets/icons/svg/icon-link-dark.svg';

// Styles
import * as Styles from './styles';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hasUser = true;
  return (
    <Styles.HeaderContainer>
      <Styles.Logo>
        <img src={LinkIconDark} alt="Logo" />
        <p>
          Casa<span>Shorts</span>
        </p>
      </Styles.Logo>
      <Styles.NavContainer>
        {/* <Styles.Nav>
          {hasUser ? (
            <>
              <Styles.NavItem href="#">Minha conta</Styles.NavItem>
              <Styles.NavItem href="#">Sair</Styles.NavItem>
            </>
          ) : (
            <>
              <Styles.NavItem href="#">Criar conta</Styles.NavItem>
              <Styles.NavItem href="#">Entrar</Styles.NavItem>
            </>
          )}
        </Styles.Nav> */}
        <Styles.HamburgerMenuButton onClick={toggleMenu}>
          <img src={HamburgerMenuIcon} alt="Hamburger Menu" />
        </Styles.HamburgerMenuButton>

        <Styles.HamburgerMenu isOpen={isMenuOpen}>
          {/* <Styles.HamburgerNavItem href="#">Minha conta</Styles.HamburgerNavItem>
          <Styles.HamburgerNavItem href="#">Sair</Styles.HamburgerNavItem> */}

          {hasUser ? (
            <>
              <Styles.HamburgerNavItem href="#">Minha conta</Styles.HamburgerNavItem>
              <Styles.HamburgerNavItem href="#">Sair</Styles.HamburgerNavItem>
            </>
          ) : (
            <>
              <Styles.HamburgerNavItem href="#">Minha conta</Styles.HamburgerNavItem>
              <Styles.HamburgerNavItem href="#">Sair</Styles.HamburgerNavItem>
            </>
          )}
        </Styles.HamburgerMenu>
      </Styles.NavContainer>
      {/* <Styles.HamburgerMenuButton onClick={toggleMenu}>
        <img src={HamburgerMenuIcon} alt="Hamburger Menu" />
      </Styles.HamburgerMenuButton> */}
      {/* <Styles.Overlay isOpen={isMenuOpen} onClick={toggleMenu}></Styles.Overlay> */}
    </Styles.HeaderContainer>
  );
};

export default Header;
