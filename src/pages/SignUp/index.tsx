import { Link } from 'react-router-dom';

import Logo from '../../components/Logo';

import GoogleIcon from '../../assets/icons/svg/icon-google.svg';
import SiginUp from '../../assets/images/svg/signup.svg';

// Styles
import * as Styles from './styles';

export default function SignUp() {
  return (
    <Styles.SignUpContainer>
      {/* main image  */}
      <div>
        <img src={SiginUp} alt="" />
      </div>
      <div>
        {/* Criar Conta */}
        <Styles.Etc>
          <Logo />
        </Styles.Etc>
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
      </div>
    </Styles.SignUpContainer>
  );
}
