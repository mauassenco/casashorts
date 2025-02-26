import { KebabMenu } from '../../../../components/KebabMenu';

import ShareIcon from '../../../../assets/icons/svg/icon-share-black.svg';
import KebabIcon from '../../../../assets/icons/svg/icon-kebab.svg';

// Styles
import * as Styles from './styles';

interface ILinkItem {
  urlEncurtada: string;
  isOpen: boolean;
  onMenuClick: () => void;
  onEditClick: () => void;
  onCopyClick: () => void;
  onDeleteClick: () => void;
}
export default function LinkItem({
  urlEncurtada,
  isOpen,
  onMenuClick,
  onEditClick,
  onCopyClick,
  onDeleteClick,
}: ILinkItem) {
  return (
    <Styles.LinkItemContainer>
      <div>
        <p>{urlEncurtada}</p>
      </div>
      <Styles.LinkItemIconsContainer>
        <img src={ShareIcon} alt="Compartilhar link" />

        <button onClick={onMenuClick}>
          <img src={KebabIcon} alt="Kebab menu" />
        </button>
        {isOpen && (
          <Styles.KebabMenu $isOpen={isOpen}>
            <KebabMenu
              onEdit={onEditClick}
              onCopy={onCopyClick}
              onDelete={onDeleteClick}
              onQrCode={() => console.log('QR Code clicked')}
            />
          </Styles.KebabMenu>
        )}
      </Styles.LinkItemIconsContainer>
    </Styles.LinkItemContainer>
  );
}
