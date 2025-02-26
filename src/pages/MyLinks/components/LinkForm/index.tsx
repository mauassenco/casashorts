import { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import type rootReducer from '../../../../redux/root-reducer';
import { useSelector } from 'react-redux';

import { CustomInput } from '../../../../components/CustomInput';
import FlexContainer from '../../../../components/FlexContainer';
import Spinner from '../../../../components/Spinner';

import InfoIcon from '../../../../assets/icons/svg/icon-info.svg';
import MyLinksImage from '../../../../assets/images/svg/rating.svg';

// Styles
import * as Styles from './styles';

interface IuserItem {
  id: string;
  url: string;
  dtCriacao: string;
  titulo: string;
  urlEncurtada: string;
  qtdCliques: number;
}

export default function LinkForm({ selectedLinkItem }: { selectedLinkItem?: IuserItem }) {
  const { currentUser } = useSelector((state: ReturnType<typeof rootReducer>) => state.userReducer);

  const [isLoading, setIsLoading] = useState(false);
  // const [url, setUrl] = useState('');

  const [initialValues, setInitialValues] = useState({
    url: '',
    titulo: '',
  });

  // const initialValues = {
  //   url: '',
  //   keyWord: '',
  // };

  const validationSchema = Yup.object().shape({
    url: Yup.string().required('URL é obrigatória'),
    titulo: Yup.string(),
  });

  useEffect(() => {
    if (selectedLinkItem) {
      setInitialValues({
        url: selectedLinkItem.url || '',
        titulo: selectedLinkItem.titulo || '',
      });
    }
  }, [selectedLinkItem]);

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    try {
      setIsLoading(true);
      const response = await fetch('https://api-staging.casadoconstrutor.com.br/api-encurtador/v1/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idConta: currentUser!.userId,
          titulo: '',
          url: values.url,
          urlEncurtada: values.keyWord ? `shorts.casa/${values.keyWord}` : '',
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao encurtar link');
      }

      const data = await response.json();
      console.log('Link encurtado:', data);
      alert('Link encurtado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao encurtar o link');
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Styles.MyLinksContainer>
      <Styles.FormImage>
        <img src={MyLinksImage} alt="" />
      </Styles.FormImage>
      <Styles.MyLinksFormContainer>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
          enableReinitialize
        >
          <Form>
            <CustomInput name="url" type="text" label="Encurte o seu link aqui" placeholder="Cole o link aqui" />

            <FlexContainer orientation="column">
              <label htmlFor="titulo">
                Personalize seu link encurtado - <span>Opcional</span>{' '}
              </label>
              <Styles.SplitedContainer>
                <p>shorts.casa/</p>
                <CustomInput name="titulo" type="text" placeholder="Palavra-chave" />
                <img src={InfoIcon} alt="" />
              </Styles.SplitedContainer>
            </FlexContainer>
            <div className="">
              <button type="submit">{isLoading ? <Spinner /> : 'Encurtar'}</button>
            </div>
          </Form>
        </Formik>
      </Styles.MyLinksFormContainer>
    </Styles.MyLinksContainer>
  );
}
