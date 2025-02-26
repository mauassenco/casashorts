import { useState } from 'react';
import type rootReducer from '../../../../redux/root-reducer';

import LinkItem from '../Linkitem';

// Styles
import * as Styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { LinkActionTypes } from '../../../../redux/link/action-types';

interface IuserItem {
  id: string;
  url: string;
  dtCriacao: string;
  titulo: string;
  urlEncurtada: string;
  qtdCliques: number;
}
export default function LinkTable() {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const { currentUser } = useSelector((state: ReturnType<typeof rootReducer>) => state.userReducer);

  const dispatch = useDispatch();

  const shortedLinks = currentUser?.items.data.items;

  const handleMenuClick = (id: string) => {
    setOpenMenuId((prevState) => (prevState === id ? null : id));
  };

  const handleEditClick = (link: IuserItem) => {
    dispatch({
      type: LinkActionTypes.SELECTED_LINK,
      payload: link,
    });
    setOpenMenuId(null);
  };

  const handleCopyClick = (link: IuserItem) => {
    navigator.clipboard.writeText(link.urlEncurtada);
    setOpenMenuId(null);
  };

  const handleDeleteClick = (link: IuserItem) => {
    console.log(link.id);
    setOpenMenuId(null);
  };

  return (
    <Styles.TableContainer>
      <Styles.TableHeader>
        <Styles.TableHeaderCell>
          <h3>Meus links</h3>
        </Styles.TableHeaderCell>
        <Styles.TableHeaderCell>
          <select id="ordenacao" value="Ordenar por" onChange={() => {}}>
            <option value="Ordenar por" disabled>
              Ordenar por
            </option>
            <option value="A-Z">De A a Z</option>
            <option value="Z-A">De Z a A</option>
            <option value="recente">Mais recente</option>
            <option value="antigo">Mais antigo</option>
          </select>
        </Styles.TableHeaderCell>
      </Styles.TableHeader>
      <Styles.TableBody>
        {shortedLinks.length === 0 ? (
          <p>Você ainda não possui links encurtados</p>
        ) : (
          <>
            {shortedLinks.map((link: IuserItem) => (
              <Styles.TableRow key={link.id}>
                <LinkItem
                  urlEncurtada={`shorts.casa/${link.urlEncurtada}`}
                  isOpen={openMenuId === link.id}
                  onMenuClick={() => handleMenuClick(link.id)}
                  onEditClick={() => handleEditClick(link)}
                  onCopyClick={() => handleCopyClick(link)}
                  onDeleteClick={() => handleDeleteClick(link)}
                />
              </Styles.TableRow>
            ))}
          </>
        )}
      </Styles.TableBody>
    </Styles.TableContainer>
  );
}
