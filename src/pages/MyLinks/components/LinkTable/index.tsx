import React, { useState } from 'react';

import LinkItem from '../Linkitem';
// Styles
import * as Styles from './styles';

const shortedLinks = [
  {
    id: '628b924eba7ed84b3d76e1af',
    idConta: '628b910dba7ed84b3d76e1ae',
    titulo: 'string',
    url: 'string',
    dtCriacao: 'null',
    urlEncurtada: 'string123344',
    qtdCliques: 0,
  },
  {
    id: '628b9262ba7ed84b3d76e1b0',
    idConta: '628b910dba7ed84b3d76e1ae',
    titulo: 'string',
    url: 'string',
    dtCriacao: 'null',
    urlEncurtada: 'ZKEGBIG4BJAHI24',
    qtdCliques: 0,
  },
  {
    id: '63ea2d69fc8c60624e139516',
    idConta: '628b910dba7ed84b3d76e1ae',
    titulo: 'teste',
    url: 'testeUrl',
    dtCriacao: 'null',
    urlEncurtada: 'testeUrlEncurtada',
    qtdCliques: 0,
  },
  {
    id: '63ea2d9afc8c60624e139517',
    idConta: '628b910dba7ed84b3d76e1ae',
    titulo: 'um titulo',
    url: 'umaUrl',
    dtCriacao: 'null',
    urlEncurtada: 'umaUrlEncurtada',
    qtdCliques: 0,
  },
  {
    id: '63ea2dadfc8c60624e139518',
    idConta: '628b910dba7ed84b3d76e1ae',
    titulo: 'aaaa',
    url: 'aaaa',
    dtCriacao: 'null',
    urlEncurtada: 'aa',
    qtdCliques: 0,
  },
  {
    id: '63ea2db8fc8c60624e139519',
    idConta: '628b910dba7ed84b3d76e1ae',
    titulo: 'bb3',
    url: 'bb3',
    dtCriacao: 'null',
    urlEncurtada: 'bb3',
    qtdCliques: 2,
  },
];

export default function LinkTable() {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const handleMenuClick = (id: string) => {
    setOpenMenuId((prevState) => (prevState === id ? null : id));
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
            {shortedLinks.map((link) => (
              <Styles.TableRow key={link.id}>
                <LinkItem
                  urlEncurtada={`shorts.casa/${link.urlEncurtada}`}
                  isOpen={openMenuId === link.id}
                  onMenuClick={() => handleMenuClick(link.id)}
                />
              </Styles.TableRow>
            ))}
          </>
        )}
      </Styles.TableBody>
    </Styles.TableContainer>
  );
}
