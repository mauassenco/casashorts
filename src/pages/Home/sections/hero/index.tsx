import HeroImage from '../../../../assets/images/svg/hero-image.svg';

// Styles
import * as Styles from './styles';

import Button from '../../../../components/Button';
export default function Hero() {
  return (
    <Styles.HeroContainer>
      <div className="">
        <h1>Uma ferramenta para encurtar seus links!</h1>
        <p>
          Deixe seus links mais curtos para tornar mensagens, posts e e-mails mais acessíveis, de forma simples e
          rápida.
        </p>
        <Button label="Criar conta" />
      </div>
      <div className="">
        <img src={HeroImage} alt="" />
      </div>
    </Styles.HeroContainer>
  );
}
