import { styled, css } from 'styled-components';

export const HeroContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.87rem;
    padding: 2.2rem 1.5rem;
    background: ${theme.colors.thirdOpacity35};

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.87rem;

      @media (min-width: ${theme.breakpoints.desktop}) {
        justify-content: flex-start;
        align-items: flex-start;
        width: 50%;

        div {
          gap: 1rem;
        }

        h1 {
          font-size: ${theme.fontSize.xlarge};
        }

        p {
          font-size: ${theme.fontSize.medium};
        }

        img {
          height: 27.7rem;
        }
      }
    }

    div:first-of-type {
      max-width: 516px;
    }

    h1 {
      font-size: ${theme.fontSize.regular};
      font-weight: ${theme.fontWeight.semibold};
      color: ${theme.colors.title};
      margin: 0;
    }

    p {
      font-size: ${theme.fontSize.small};
      font-weight: ${theme.fontWeight.medium};
      color: ${theme.colors.text};
      margin: 0;
    }

    img {
      padding: 1rem 0;
      width: 100%;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      flex-direction: row;
      justify-content: space-between;
      padding: 3.45rem 6rem;
    }
  `}
`;
