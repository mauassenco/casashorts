import SpinnerIcon from '../../assets/icons/svg/icon-spinner.svg';

import * as Styles from './styles';

export default function Spinner() {
  return (
    <Styles.Spinner>
      <img src={SpinnerIcon} alt="Setas girando" />
    </Styles.Spinner>
  );
}
