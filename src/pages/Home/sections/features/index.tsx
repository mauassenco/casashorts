import IconLink from '../../../../assets/icons/svg/icon-link.svg';
import IconEdit from '../../../../assets/icons/svg/icon-edit.svg';
import IconNotification from '../../../../assets/icons/svg/icon-notification.svg';
import IconShare from '../../../../assets/icons/svg/icon-share.svg';

// Styles
import * as Styles from './styles';
import Button from '../../../../components/Button';

export default function Features() {
  return (
    <Styles.FeaturesContainer>
      <header>
        <h2>Por que usar o CasaShorts?</h2>
      </header>
      <Styles.FeaturesCards>
        <Styles.CardItem>
          <Styles.IconContainer>
            <img src={IconLink} alt="" />
          </Styles.IconContainer>
          <div className="">
            <h3>Encurtar links longos</h3>
            <p>Deixe seus links mais acessíveis, encurtando uma URL longa e gerando um link curto.</p>
          </div>
        </Styles.CardItem>
        <Styles.CardItem>
          <Styles.IconContainer>
            <img src={IconEdit} alt="" />
          </Styles.IconContainer>
          <div className="">
            <h3>Links personalizáveis</h3>
            <p>
              Você pode usar palavras-chave para personalizar seus links! Quer enviar um link para um cliente?
              Experimente personalizá-lo com o nome de sua loja ou cidade.
            </p>
          </div>
        </Styles.CardItem>
        <Styles.CardItem>
          <Styles.IconContainer>
            <img src={IconNotification} alt="" />
          </Styles.IconContainer>
          <div className="">
            <h3>Acompanhar seus links</h3>
            <p>
              Quer saber quantos acessos seu link teve? Com o CasaShorts isso é possível através da função Contagem de
              Cliques de cada link.
            </p>
          </div>
        </Styles.CardItem>
        <Styles.CardItem>
          <Styles.IconContainer>
            <img src={IconShare} alt="" />
          </Styles.IconContainer>
          <div className="">
            <h3>Compartilhar links</h3>
            <p>Você pode compartilhar seus links diretamente do CasaShorts para o WhatsApp, Facebook e E-mail.</p>
          </div>
        </Styles.CardItem>
      </Styles.FeaturesCards>
      <footer>
        <Button label="Criar conta" />
      </footer>
    </Styles.FeaturesContainer>
  );
}
