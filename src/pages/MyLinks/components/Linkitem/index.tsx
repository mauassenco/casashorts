import { KebabMenu } from '../../../../components/KebabMenu';

import ShareIcon from '../../../../assets/icons/svg/icon-share-black.svg';
import KebabIcon from '../../../../assets/icons/svg/icon-kebab.svg';

// Styles
import * as Styles from './styles';

interface ILinkItem {
  urlEncurtada: string;
  isOpen: boolean;
  onMenuClick: () => void;
}
export default function LinkItem({ urlEncurtada, isOpen, onMenuClick }: ILinkItem) {
  return (
    <Styles.LinkItemContainer>
      <div className="">
        <p>{urlEncurtada}</p>
      </div>
      <Styles.LinkItemIconsContainer>
        <img src={ShareIcon} alt="" />

        <button onClick={onMenuClick}>
          <img src={KebabIcon} alt="" />
        </button>
        {isOpen && (
          <Styles.KebabMenu $isOpen={isOpen}>
            <KebabMenu
              onEdit={() => console.log('Edit clicked')}
              onCopy={() => console.log('Copy clicked')}
              onDelete={() => console.log('Delete clicked')}
              onQrCode={() => console.log('QR Code clicked')}
            />
          </Styles.KebabMenu>
        )}
      </Styles.LinkItemIconsContainer>
    </Styles.LinkItemContainer>
  );
}
