import LinkIconDark from '../../assets/icons/svg/icon-link-dark.svg';

// Styles
import * as Styles from './styles';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <>
      <Styles.Logo>
        <Link to="/">
          <img src={LinkIconDark} alt="Logo" />
          <p>
            Casa<span>Shorts</span>
          </p>
        </Link>
      </Styles.Logo>
    </>
  );
}
