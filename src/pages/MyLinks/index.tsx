import { useSelector } from 'react-redux';
import type rootReducer from '../../redux/root-reducer';

// import { useAuthRedirect } from '../../hooks/useAuthRedirect';

import LinkForm from './components/LinkForm';
import LinkTable from './components/LinkTable';

// Styles
import * as Styles from './styles';

export default function MyLinks() {
  const { selectedLink } = useSelector((state: ReturnType<typeof rootReducer>) => state.linkReducer);
  // useAuthRedirect();

  return (
    <Styles.MyLinksContainer>
      <LinkForm selectedLinkItem={selectedLink} />
      <LinkTable />
    </Styles.MyLinksContainer>
  );
}
