import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Logo from '../../components/Logo';

import HamburgerMenuIcon from '../../assets/icons/svg/icon-hamburger-menu.svg';
import PersonIcon from '../../assets/icons/svg/icon-person.svg';
import LogoutIcon from '../../assets/icons/svg/icon-logout.svg';
import ReturnArrow from '../../assets/icons/svg/icon-arrow.svg';

// Styles
import * as Styles from './styles';

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

  const location = useLocation();

  console.log(location.pathname);

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
      <Logo />
      {location.pathname === '/sign-in' || location.pathname === '/sign-up' ? (
        <Styles.ReturnArrow>
          <Link to="/">
            <img src={ReturnArrow} alt="Hamburger Menu" />
          </Link>
        </Styles.ReturnArrow>
      ) : (
        <>
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
        </>
      )}
    </Styles.HeaderContainer>
  );
};

export default Header;
