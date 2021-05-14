import { useState, useRef, Fragment } from 'react';
import { jsx, css } from '@emotion/react';
import PropTypes from 'prop-types';

import TableOfContents from '../Docs/TOC';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Overlay from '../Overlay';
import { Container, Main, Children, Docs, Featured } from './styles';

import { MDXProvider } from "@mdx-js/react" ;
import * as Icons from 'react-icons/io5' ;
import { BrandFont } from "../Brand/font";
import { BrandRule } from "../Brand/rule";
import { BrandColor } from "../Brand/color";
import { BrandBox } from "../Brand/box";
import { BrandCaption } from "../Brand/caption";
import { IconContext } from "react-icons";

import { Grid, Embed, Badge } from "theme-ui";

import { GatsbyImage } from "gatsby-plugin-image";

const shortcodes = { BrandFont, BrandRule, BrandColor, BrandCaption, BrandBox, GatsbyImage, Grid, Embed, Badge, Icons }

export default function Layout({
  children,
  disableTableOfContents,
  title,
  headings,
  featured,
}) 

{
  const contentRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const disableTOC =
    disableTableOfContents === true || !headings || headings.length === 0;

  function handleMenuOpen() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <MDXProvider components={shortcodes}>
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
    <Fragment>
      <Overlay isMenuOpen={isMenuOpen} onClick={handleMenuOpen} />
      <Container>
        <Sidebar isMenuOpen={isMenuOpen} />
        <Main>
        <Header handleMenuOpen={handleMenuOpen} />
        <Featured>
          {featured && (
          <GatsbyImage image={featured.childImageSharp.gatsbyImageData} alt={title} style={{height: '300px'}}/>
          )}
        </Featured>
        <Docs>
          {title && (
            <h1
              css={css`
                display: none;

                @media (max-width: 1200px) {
                  display: block;
                }
                @media (max-width: 780px) {
                  padding:24px 0px 0px 24px;
                }
              `}
            >
              {title}
            </h1>
          )}
          <Children ref={contentRef}>
            {title && (
              <h1 css={css`
              margin-bottom:40px;

              @media (max-width: 1200px) {
                display: none;
              }
            `}>
                {title}
              </h1>
            )}
            {children}
          </Children>
          <TableOfContents
            headings={headings}
            disableTOC={disableTOC}
            contentRef={contentRef}
            title={title}
          />
          </Docs>
        </Main>
      </Container>
    </Fragment>
    </IconContext.Provider>
    </MDXProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  disableTableOfContents: PropTypes.bool,
  title: PropTypes.string,
  headings: PropTypes.array,
};

Layout.defaultProps = {
  disableTableOfContents: false,
  title: '',
  headings: null,
};
