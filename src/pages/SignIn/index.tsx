import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo';
import Modal from '../../components/Modal';
import Cta from '../../components/Cta';

import GoogleIcon from '../../assets/icons/svg/icon-google.svg';
import FlexContainer from '../../components/FlexContainer';
import SignInImage from '../../assets/images/svg/signin.svg';

// Styles
import * as Styles from './styles';

export default function SignIn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError(null);
  };

  return (
    <Styles.SignInContainer>
      <div>
        <img src={SignInImage} alt="" />
      </div>
      <div>
        <Styles.LogoContainer>
          <Logo />
        </Styles.LogoContainer>
        <div>
          <h3>Acesse sua conta</h3>
          <Styles.GoogleButton>
            <Link to="/my-links">
              <img src={GoogleIcon} alt="" />
              <p>Entrar com o Google</p>
            </Link>
          </Styles.GoogleButton>
          <Styles.SwitchAccess>
            <p>
              Não tem uma conta? <Link to="/sign-up">Cadastre-se aqui</Link>
            </p>
          </Styles.SwitchAccess>
        </div>
        <button onClick={() => handleError('Ocorreu um erro!')}>Modal</button>
      </div>
      {error && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Não foi possível realizar o login</h2>
          <p>Por favor, utilize apenas seu e-mail da Casa do Construtor para fazer o login. </p>
          <FlexContainer>
            <Cta variant="outline" onClick={closeModal} label="Cancelar" destination="/" />
            <Cta onClick={closeModal} label="Tentar novamente" />
          </FlexContainer>
        </Modal>
      )}
    </Styles.SignInContainer>
  );
}
