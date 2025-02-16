import { Link } from 'react-router-dom';

import Logo from '../../components/Logo';

import GoogleIcon from '../../assets/icons/svg/icon-google.svg';
import SignInImage from '../../assets/images/svg/signin.svg';

// Styles
import * as Styles from './styles';

export default function SignIn() {
  return (
    <Styles.SignInContainer>
      {/* main image  */}
      <div>
        <img src={SignInImage} alt="" />
      </div>
      <div>
        {/* Criar Conta */}
        <Styles.Etc>
          <Logo />
        </Styles.Etc>
        <div>
          <h3>Acesse sua conta</h3>
          {/* Google Btn */}
          <Styles.GoogleButton>
            <Link to="/">
              <img src={GoogleIcon} alt="" />
              <p>Entrar com o Google</p>
            </Link>
          </Styles.GoogleButton>
          {/* Já tem conta */}
          <Styles.SwitchAccess>
            <p>
              Não tem uma conta? <Link to="/sign-up">Cadastre-se aqui</Link>
            </p>
          </Styles.SwitchAccess>
        </div>
      </div>
    </Styles.SignInContainer>
  );
}
