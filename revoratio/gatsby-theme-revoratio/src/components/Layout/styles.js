import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;

  display: grid;
  grid-template-columns: 280px calc(100% - 320px);
  grid-auto-flow: row;
  grid-gap: 40px;

  @media (max-width: 780px) {
    // padding: 0px 24px 24px 24px;
    grid-template-columns: 100%;
  }
`;

export const Main = styled.main`
  height: calc(100%-300px);

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 780px) {
    padding-top: 0;
  }
`;

export const Featured = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    flex-direction: column;
  }
`;

export const Docs = styled.div`
  height: 100%;
  padding-top: 36px;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  position: relative;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 780px) {
    padding-top: 0;
  }
`;

export const Children = styled.div`
  width: 100%;
  max-width: calc(100% - 250px);
  padding-right: 64px;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding-right: 24px;
    order: 3;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  @media (max-width: 780px) {
    padding: 0px 24px 24px 24px;
  }
`;
