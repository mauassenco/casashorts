import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo';
import Cta from '../../components/Cta';
import FlexContainer from '../../components/FlexContainer';
import Modal from '../../components/Modal';

import GoogleIcon from '../../assets/icons/svg/icon-google.svg';
import SiginUp from '../../assets/images/svg/signup.svg';

// Styles
import * as Styles from './styles';

export default function SignUp() {
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
    <Styles.SignUpContainer>
      {/* main image  */}
      <div>
        <img src={SiginUp} alt="" />
      </div>
      <div>
        {/* Criar Conta */}
        <Styles.LogoContainer>
          <Logo />
        </Styles.LogoContainer>
        <div>
          <h3>Crie uma nova conta</h3>
          {/* Google Btn */}
          <Styles.GoogleButton>
            <Link to="/">
              <img src={GoogleIcon} alt="" />
              <p>Cadastrar com o Google</p>
            </Link>
          </Styles.GoogleButton>
          {/* Já tem conta */}
          <Styles.SwitchAccess>
            <p>
              Já tem uma conta? <Link to="/sign-in">Entre aqui</Link>
            </p>
          </Styles.SwitchAccess>
        </div>
        <button onClick={() => handleError('Ocorreu um erro!')}>Modal</button>
      </div>
      {error && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Não foi possível realizar o cadastro</h2>
          <p>Por favor, utilize apenas seu e-mail da Casa do Construtor para fazer o cadastro </p>
          <FlexContainer>
            <Cta variant="outline" onClick={closeModal} label="Cancelar" destination="/" />
            <Cta onClick={closeModal} label="Acessar minha conta" />
          </FlexContainer>
        </Modal>
      )}
    </Styles.SignUpContainer>
  );
}
