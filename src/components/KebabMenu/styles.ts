import styled from 'styled-components';

export const KebabMenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const KebabButton = styled.button`
  background: none;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

export const KebabMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  list-style: none;
  margin: 0;
  padding: 10px;
  z-index: 1;
  min-width: 190px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    pointer-events 0.2s;
`;

export const KebabMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #f0f0f0;
  }
`;
