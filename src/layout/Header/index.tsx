import { useState } from 'react';

import HamburgerMenuIcon from '../../assets/icons/svg/icon-hamburger-menu.svg';
import PersonIcon from '../../assets/icons/svg/icon-person.svg';
import LogoutIcon from '../../assets/icons/svg/icon-logout.svg';
import LinkIconDark from '../../assets/icons/svg/icon-link-dark.svg';

// Styles
import * as Styles from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
  const user = {
    name: 'Silvinha',
    image: '',
  };

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  const [desktopMenuIsOpen, setDesktopMenuIsOpen] = useState(false);
  // TODO: How to check if user is logged

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hasUser, setHasUser] = useState(false);

  const handleMenuItemClick = () => {
    setHamburgerMenuIsOpen(false);
  };

  const toggleMobileMenu = () => {
    setHamburgerMenuIsOpen(!hamburgerMenuIsOpen);
  };

  const toggleDesktopMenu = () => {
    setDesktopMenuIsOpen(!desktopMenuIsOpen);
    console.log(desktopMenuIsOpen);
  };

  return (
    <Styles.HeaderContainer>
      <Styles.Logo>
        <Link to="/">
          <img src={LinkIconDark} alt="Logo" />
          <p>
            Casa<span>Shorts</span>
          </p>
        </Link>
      </Styles.Logo>
      <Styles.NavContainer $hasUser={hasUser}>
        {/* Mobile/Tablet Menu */}
        <Styles.HamburgerMenuButton onClick={toggleMobileMenu}>
          <img src={HamburgerMenuIcon} alt="Hamburger Menu" />
        </Styles.HamburgerMenuButton>
        <Styles.HamburgerNavMenu $isOpen={hamburgerMenuIsOpen}>
          {hasUser ? (
            <>
              <Styles.NavItem>
                <Link to="/profile">
                  <img src={PersonIcon} alt="" />
                  Minha conta
                </Link>
              </Styles.NavItem>
              <Styles.NavItem>
                <img src={LogoutIcon} alt="" />
                Sair
              </Styles.NavItem>
            </>
          ) : (
            <>
              <Styles.NavItem>
                <Link to="/sign-up" onClick={handleMenuItemClick}>
                  Criar conta
                </Link>
              </Styles.NavItem>
              <Styles.NavItem>
                <Link to="/sign-in" onClick={handleMenuItemClick}>
                  Entrar
                </Link>
              </Styles.NavItem>
            </>
          )}
        </Styles.HamburgerNavMenu>

        {/* Desktop Menu */}
        <Styles.NavMenu>
          {hasUser ? (
            <>
              <Styles.UserHeader>
                <h3>
                  Olá, <span>{user.name}</span>
                </h3>
                <button onClick={toggleDesktopMenu}>
                  {user.image ? (
                    <img src={user.image} alt="" width={40} height={40} />
                  ) : (
                    <p>{user.name[0].toUpperCase()}</p>
                  )}
                </button>
                <Styles.DesktopNavMenu $isOpen={desktopMenuIsOpen}>
                  <Styles.NavItem>
                    <Link to="" onClick={handleMenuItemClick}>
                      <img src={PersonIcon} alt="" />
                      Minha conta
                    </Link>
                  </Styles.NavItem>
                  <Styles.NavItem>
                    <Link to="" onClick={handleMenuItemClick}>
                      <img src={LogoutIcon} alt="" />
                      Sair
                    </Link>
                  </Styles.NavItem>
                </Styles.DesktopNavMenu>
              </Styles.UserHeader>
            </>
          ) : (
            <Styles.NavItemContainer>
              <Styles.NavItem>
                <Link to="/sign-up" onClick={handleMenuItemClick}>
                  Criar conta
                </Link>
              </Styles.NavItem>
              <Styles.NavItem>
                <Link to="/sign-in" onClick={handleMenuItemClick}>
                  Entrar
                </Link>
              </Styles.NavItem>
            </Styles.NavItemContainer>
          )}
        </Styles.NavMenu>
      </Styles.NavContainer>
      <Styles.Overlay $isOpen={hamburgerMenuIsOpen} onClick={toggleMobileMenu} />
    </Styles.HeaderContainer>
  );
};

export default Header;
