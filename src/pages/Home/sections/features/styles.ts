import { styled, css } from 'styled-components';

export const FeaturesContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 2.2rem 1.5rem;
    background: ${theme.colors.secondary};

    h2 {
      font-size: ${theme.fontSize.small};
      font-weight: ${theme.fontWeight.semibold};
      color: ${theme.colors.title};
      text-align: center;
    }

    footer {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 3.3rem 0 3.75rem;
    }

    @media (min-width: ${theme.breakpoints.tablet}) {
      padding: 4rem 5rem;
      gap: 3.5rem;

      h2 {
        font-size: ${theme.fontSize.large};
      }

      footer {
        padding: 2.35rem 0;
      }
    }
  `};
`;

export const FeaturesCards = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    align-items: normal;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;

    @media (min-width: ${theme.breakpoints.tablet}) {
      flex-direction: row;
      justify-content: space-between;
      gap: 3.4rem 1.75rem;
      flex-wrap: no-wrap;
    }
  `}
`;

export const CardItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    padding: 0.875rem;
    border-radius: ${theme.borderRadius.medium};
    border: solid 1px ${theme.colors.fourth};
    min-height: 10.125rem;
    width: 100%;

    h3 {
      margin: 0;
      color: ${theme.colors.title};
      font-weight: ${theme.fontWeight.semibold};
      font-size: ${theme.fontSize.small};
    }

    p {
      font-size: ${theme.fontSize.xsmall};
      font-weight: ${theme.fontWeight.normal};
    }

    img {
      width: 16px;
      height: 16px;
    }

    @media (min-width: ${theme.breakpoints.tablet}) {
      min-height: 8rem;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      flex: 1 0 45%;
      gap: 1.375rem;
      padding: 1.6rem 1.65rem 1.6rem 1rem;
      min-height: 11.5rem;
      width: 36rem;

      h3 {
        font-size: ${theme.fontSize.medium};
        margin-bottom: 1.125rem;
      }

      p {
        font-size: ${theme.fontSize.regular};
        margin: 0;
        font-weight: ${theme.fontWeight.medium};
        /* width: 29rem; */
        width: 100%;
      }
    }
  `}
`;

export const IconContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 100%;
    max-width: 32px;
    max-height: 32px;

    @media (min-width: ${theme.breakpoints.desktop}) {
      padding: 24px;

      img {
        width: 24px;
        height: 24px;
      }
    }
  `}
`;
