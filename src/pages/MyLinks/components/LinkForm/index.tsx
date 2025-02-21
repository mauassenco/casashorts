import { Form, Formik } from 'formik';
import * as Yup from 'yup';

// Styles
import * as Styles from './styles';

import { CustomInput } from '../../../../components/CustomInput';
import FlexContainer from '../../../../components/FlexContainer';

import InfoIcon from '../../../../assets/icons/svg/icon-info.svg';
import MyLinksImage from '../../../../assets/images/svg/rating.svg';

export default function LinkForm() {
  const initialValues = {
    url: '',
    keyWord: '',
  };

  const validationSchema = Yup.object().shape({
    url: Yup.string(),
    keyWord: Yup.string(),
  });

  const handleSubmit = () => {
    console.log('submit');
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
        >
          <Form>
            <CustomInput name="url" type="text" label="Encurte o seu link aqui" placeholder="Cole o link aqui" />

            <FlexContainer orientation="column">
              <label htmlFor="keyWord">
                Personalize seu link encurtado - <span>Opcional</span>{' '}
              </label>
              <Styles.SplitedContainer>
                <p>shorts.casa/</p>
                <CustomInput name="keyWord" type="text" placeholder="Palavra-chave" />
                <img src={InfoIcon} alt="" />
              </Styles.SplitedContainer>
            </FlexContainer>
            <div className="">
              <button type="submit">Encurtar</button>
            </div>
          </Form>
        </Formik>
      </Styles.MyLinksFormContainer>
    </Styles.MyLinksContainer>
  );
}
