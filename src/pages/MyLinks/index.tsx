import LinkForm from './components/LinkForm';
import LinkTable from './components/LinkTable';

// Styles
import * as Styles from './styles';

export default function MyLinks() {
  return (
    <Styles.MyLinksContainer>
      <LinkForm />
      <LinkTable />
    </Styles.MyLinksContainer>
  );
}
