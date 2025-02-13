import React from 'react';

// Styles
import * as Styles from './styles';

interface IButton {
  label: string;
  onClick?: () => void;
}
export default function Button({ label }: IButton) {
  return <Styles.Button>{label}</Styles.Button>;
}
