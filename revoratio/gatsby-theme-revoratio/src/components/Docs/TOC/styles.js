import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;

  top: 0;
  order: 2;

  padding-top: 72px;
  max-height: calc(100vh - 72px);
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  max-width: 250px;

  @media (max-width: 1200px) {
    position: relative;
    top: auto;
    max-width: 100%;
    margin-left: 0;
    padding-top: 0;
  }
  @media (max-width: 780px) {
    padding: 0px 24px 0px 24px;
  }
`;

export const Container = styled.div`
  h2 {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.142em;
    margin-top: 0rem;
    border: none;
    margin: 0 0 16px 0;
  }

  nav ul {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

    li {
      margin-bottom: 12px;
      line-height: 1.1;

      @media (max-width: 1200px) {
        display: inline-block;
        margin: 0px 24px 8px 0px;
        margin-left:0px !important;
        text-transform: uppercase;
      }

      a {
        font-size: 14px;
        font-weight: 400;
        text-decoration: none;
        transition: all 0.2s;
        overflow-wrap: break-word;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    margin: 0 0 16px 0;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(120, 117, 122, 0.2);
  }
`;
