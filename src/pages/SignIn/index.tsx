import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import type rootReducer from '../../redux/root-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode, type JwtPayload } from 'jwt-decode';
import { UserActionTypes } from '../../redux/user/action-types';
import { ModalActionTypes } from '../../redux/modal/action-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Logo from '../../components/Logo';
import SignInImage from '../../assets/images/svg/signin.svg';
import Cta from '../../components/Cta';
import FlexContainer from '../../components/FlexContainer';
import Modal from '../../components/Modal';

// Styles
import * as Styles from './styles';

interface Account {
  id: string;
  email: string;
}

export default function SignIn() {
  const { modalState } = useSelector((state: ReturnType<typeof rootReducer>) => state.modalReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAccounts = async (): Promise<{ id: string; email: string }[]> => {
    const response = await axios.get<{ id: string; email: string }[]>(
      'https://api-staging.casadoconstrutor.com.br/api-encurtador/v1/contas',
    );

    return response.data;
  };

  const login = async (credential: string) => {
    const resDecoded = jwtDecode<JwtPayload & { name: string; picture: string; email: string }>(credential);

    if (resDecoded.email.endsWith('@terceirocasadoconstrutor.com.br')) {
      // if (resDecoded.email) {

      // Get user id
      const accounts = await fetchAccounts();
      const foundAccount = accounts.data.find((account: Account) => account.email === resDecoded.email);
      const userId = foundAccount.idConta;

      //Get user links
      const links = await axios.get(
        `https://api-staging.casadoconstrutor.com.br/api-encurtador/v1/links?idConta=${userId}&page=0&size=10&sort=id%2Casc`,
      );

      dispatch({
        type: UserActionTypes.LOGIN,
        payload: {
          userId: userId,
          name: resDecoded.name,
          image: resDecoded.picture,
          items: links.data,
        },
      });

      navigate('/my-links');
    } else {
      dispatch({
        type: ModalActionTypes.OPEN,
      });
    }
  };

  const closeModal = () => {
    dispatch({
      type: ModalActionTypes.CLOSE,
    });
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
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                if (credentialResponse.credential) {
                  login(credentialResponse.credential);
                } else {
                  console.error('Credential response is undefined');
                }
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </Styles.GoogleButton>
          <Styles.SwitchAccess>
            <p>
              Não tem uma conta? <Link to="/sign-up">Cadastre-se aqui</Link>
            </p>
          </Styles.SwitchAccess>
        </div>
      </div>

      <Modal isOpen={modalState} onClose={closeModal}>
        <h2>Não foi possível realizar o login</h2>
        <p>Por favor, utilize apenas seu e-mail da Casa do Construtor para fazer o login. </p>
        <FlexContainer>
          <Cta variant="outline" onClick={closeModal} label="Cancelar" destination="/" />
          <Cta onClick={closeModal} label="Tentar novamente" />
        </FlexContainer>
      </Modal>
    </Styles.SignInContainer>
  );
}
