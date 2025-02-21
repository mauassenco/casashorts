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
          Acessar link
        </Styles.KebabMenuItem>
        <Styles.KebabMenuItem
          onClick={() => {
            onEdit();
          }}
        >
          Editar
        </Styles.KebabMenuItem>
        <Styles.KebabMenuItem
          onClick={() => {
            onCopy();
          }}
        >
          Copiar
        </Styles.KebabMenuItem>
        <Styles.KebabMenuItem
          onClick={() => {
            onDelete();
          }}
        >
          Excluir
        </Styles.KebabMenuItem>
        <Styles.KebabMenuItem
          onClick={() => {
            onQrCode();
          }}
        >
          QR Code
        </Styles.KebabMenuItem>
      </Styles.KebabMenu>
    </Styles.KebabMenuContainer>
  );
}
