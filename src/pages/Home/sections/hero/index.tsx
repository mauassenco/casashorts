import HeroImage from '../../../../assets/images/svg/hero-image.svg';
import Cta from '../../../../components/Cta';

// Styles
import * as Styles from './styles';

export default function Hero() {
  return (
    <Styles.HeroContainer>
      <div className="">
        <h1>Uma ferramenta para encurtar seus links!</h1>
        <p>
          Deixe seus links mais curtos para tornar mensagens, posts e e-mails mais acessíveis, de forma simples e
          rápida.
        </p>
        <Cta label="Criar conta" destination="/sign-up" />
      </div>
      <div className="">
        <img src={HeroImage} alt="" />
      </div>
    </Styles.HeroContainer>
  );
}
