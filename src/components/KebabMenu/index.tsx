import OpenIcon from '../../assets/icons/svg/icon-open_in_new.svg';
import EditIcon from '../../assets/icons/svg/icon-edit-black.svg';
import CopyIcon from '../../assets/icons/svg/icon-copy.svg';
import DeleteIcon from '../../assets/icons/svg/icon-delete.svg';
import QrIcon from '../../assets/icons/svg/icon-qr_code_scanner.svg';

import * as Styles from './styles';

interface KebabMenuProps {
  link?: string;
  onEdit: () => void;
  onCopy: () => void;
  onDelete: () => void;
  onQrCode: () => void;
}

export function KebabMenu({ link, onEdit, onCopy, onDelete, onQrCode }: KebabMenuProps) {
  return (
    <Styles.KebabMenuContainer>
      <Styles.KebabMenu>
        <Styles.KebabMenuItem
          onClick={() => {
            window.open(link, '_blank');
          }}
        >
          <img src={OpenIcon} alt="Abrir Link" />
          Acessar link
        </Styles.KebabMenuItem>
        <Styles.KebabMenuItem
          onClick={() => {
            onEdit();
          }}
        >
          <img src={EditIcon} alt="Editar Link" />
          Editar
        </Styles.KebabMenuItem>
        <Styles.KebabMenuItem
          onClick={() => {
            onCopy();
          }}
        >
          <img src={CopyIcon} alt="Copiar Link" />
          Copiar
        </Styles.KebabMenuItem>
        <Styles.KebabMenuItem
          onClick={() => {
            onDelete();
          }}
        >
          <img src={DeleteIcon} alt="Deletar Link" />
          Excluir
        </Styles.KebabMenuItem>
        <Styles.KebabMenuItem
          onClick={() => {
            onQrCode();
          }}
        >
          <img src={QrIcon} alt="Deletar Link" />
          QR Code
        </Styles.KebabMenuItem>
      </Styles.KebabMenu>
    </Styles.KebabMenuContainer>
  );
}
