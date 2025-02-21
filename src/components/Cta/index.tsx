// import { Link } from 'react-router-dom';

// // Styles
// import * as Styles from './styles';

// interface ICta {
//   label: string;
//   destination: string;
// }
// export default function Cta({ label, destination }: ICta) {
//   return (
//     <Styles.Cta>
//       <Link to={destination}>{label}</Link>
//     </Styles.Cta>
//   );
// }
import { Link } from 'react-router-dom';

// Styles
import * as Styles from './styles';

interface ICta {
  label: string;
  destination?: string;
  onClick?: () => void;
  variant?: 'default' | 'outline';
}

export default function Cta({ label, destination, onClick, variant = 'default' }: ICta) {
  return (
    <Styles.Cta $variant={variant}>
      {destination ? <Link to={destination}>{label}</Link> : <span onClick={onClick}>{label}</span>}
    </Styles.Cta>
  );
}
