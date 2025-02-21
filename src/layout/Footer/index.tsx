import { useLocation } from 'react-router-dom';

// Styles
import * as Styles from './styles';

export default function Footer() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && (
        <Styles.FooterContainer>
          <p>© 2022 CasaShorts. Todos os direitos reservados.</p>
        </Styles.FooterContainer>
      )}
    </>
  );
}
