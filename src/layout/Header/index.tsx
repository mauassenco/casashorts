import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { googleLogout } from '@react-oauth/google';

import Logo from '../../components/Logo';

import HamburgerMenuIcon from '../../assets/icons/svg/icon-hamburger-menu.svg';
import PersonIcon from '../../assets/icons/svg/icon-person.svg';
import LogoutIcon from '../../assets/icons/svg/icon-logout.svg';
import ReturnArrow from '../../assets/icons/svg/icon-arrow.svg';

// Styles
import * as Styles from './styles';

import rootReducer from '../../redux/root-reducer';
import { UserActionTypes } from '../../redux/user/action-types';
const Header = () => {
  const { currentUser } = useSelector((state: ReturnType<typeof rootReducer>) => state.userReducer);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({
      type: UserActionTypes.LOGOUT,
    });
    googleLogout();
    handleMenuItemClick();
  };

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  const [desktopMenuIsOpen, setDesktopMenuIsOpen] = useState(false);

  const location = useLocation();

  const handleMenuItemClick = () => {
    setHamburgerMenuIsOpen(false);
  };

  const toggleMobileMenu = () => {
    setHamburgerMenuIsOpen(!hamburgerMenuIsOpen);
  };

  const toggleDesktopMenu = () => {
    setDesktopMenuIsOpen(!desktopMenuIsOpen);
  };

  return (
    <Styles.HeaderContainer>
      <Logo />
      {location.pathname !== '/' ? (
        <Styles.ReturnArrow>
          <Link to="/">
            <img src={ReturnArrow} alt="Hamburger Menu" />
          </Link>
        </Styles.ReturnArrow>
      ) : (
        <>
          <Styles.NavContainer $currentUser={!!currentUser}>
            {/* Mobile/Tablet Menu */}
            <Styles.HamburgerMenuButton onClick={toggleMobileMenu}>
              <img src={HamburgerMenuIcon} alt="Hamburger Menu" />
            </Styles.HamburgerMenuButton>
            <Styles.HamburgerNavMenu $isOpen={hamburgerMenuIsOpen}>
              {currentUser ? (
                <>
                  <Styles.NavItem>
                    <Link to="/my-links">
                      <img src={PersonIcon} alt="" />
                      Minha conta
                    </Link>
                  </Styles.NavItem>
                  <Styles.NavItem>
                    <Link to="" onClick={logout}>
                      <img src={LogoutIcon} alt="" />
                      Sair
                    </Link>
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
              {currentUser ? (
                <>
                  <Styles.UserHeader>
                    <h3>
                      Olá, <span>{currentUser.name}</span>
                    </h3>
                    <button onClick={toggleDesktopMenu}>
                      {currentUser.image ? (
                        <img src={currentUser.image} alt="" width={40} height={40} />
                      ) : (
                        <p>{currentUser.name[0].toUpperCase()}</p>
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
                        <Link to="" onClick={logout}>
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
