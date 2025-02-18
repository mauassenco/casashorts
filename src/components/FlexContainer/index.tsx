// Styles
import * as Styles from './styles';

interface IFlexContainer {
  orientation?: 'row' | 'column';
  children: React.ReactNode;
}
export default function FlexContainer({ orientation = 'row', children }: IFlexContainer) {
  return <Styles.FlexContainer $orientation={orientation}>{children}</Styles.FlexContainer>;
}
