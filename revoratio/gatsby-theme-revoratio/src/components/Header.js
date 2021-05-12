import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { IoMenuOutline } from 'react-icons/io5';
import { useStaticQuery, graphql } from 'gatsby';
import Logo from './Logo';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;


  padding: 15px 24px 15px 24px;
  background-color: white;

  position:sticky;
  top:0;
  z-index: 100;

  h2 {
    margin: 0;
    border: none;
    padding: 0;
    font-size: 18px;

    @media (max-width: 359px) {
      font-size: 14px;
    }
  }

  button {
    border: none;
    background: none;
    cursor: pointer;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media (min-width: 780px) {
    display: none;
  }
`;

export default function Header({ handleMenuOpen }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `,
  );

  const { siteTitle } = site.siteMetadata;

  return (
    <Container>
      <Logo aria-hidden="true"/>
      <button aria-label="Open sidebar" type="button" onClick={handleMenuOpen}>
        <IoMenuOutline size={32} aria-hidden="true" />
      </button>
    </Container>
  );
}

Header.propTypes = {
  handleMenuOpen: PropTypes.func.isRequired,
};
