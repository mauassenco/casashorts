import React from 'react';

// Styles
import * as Styles from './styles';

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
}
export default function Button({ children }: IButton) {
  return <Styles.Button>{children}</Styles.Button>;
}
