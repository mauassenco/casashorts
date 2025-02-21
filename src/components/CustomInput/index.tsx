import { Field, ErrorMessage } from 'formik';

// Styles
import * as Styles from './styles';

interface InputItemProps {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

export function CustomInput({ name, type, label, placeholder, required }: InputItemProps) {
  return (
    <Styles.InputContainer>
      <label htmlFor={name}>{label}</label>
      <Field type={type} name={name} id={name} placeholder={placeholder} required={required} />
      <ErrorMessage name={name} component={Styles.ErrorStyled} />
    </Styles.InputContainer>
  );
}
