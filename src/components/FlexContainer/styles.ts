import { css, styled } from 'styled-components';

export const FlexContainer = styled.div<{ $orientation: 'row' | 'column' }>`
  ${({ $orientation }) => css`
    flex-direction: ${$orientation};
  `}

  display: flex;
  gap: 1rem;
`;
