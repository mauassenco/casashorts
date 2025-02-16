import { Link } from 'react-router-dom';

// Styles
import * as Styles from './styles';

interface ICta {
  label: string;
  destination: string;
}
export default function Cta({ label, destination }: ICta) {
  return (
    <Styles.Cta>
      <Link to={destination}>{label}</Link>
    </Styles.Cta>
  );
}
