import React from 'react';
import CloseModalIcon from '../../assets/icons/svg/icon-close-modal.svg';

import * as Styles from './styles';

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: IModal) {
  if (!isOpen) {
    return null;
  }

  return (
    <Styles.Overlay onClick={onClose}>
      <Styles.ModalContainer onClick={(e) => e.stopPropagation()} $modalActive={isOpen}>
        <Styles.ModalTopDash />
        <Styles.CloseButton onClick={onClose}>
          <img src={CloseModalIcon} alt="Botão fechar" />
        </Styles.CloseButton>
        {children}
      </Styles.ModalContainer>
    </Styles.Overlay>
  );
}
