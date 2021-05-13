import React from "react";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react" ;

const BrandCaption = (props) => {
  return (<MDXProvider>
      <span style={{
          color: '#828282',
          fontSize: '14px',
          lineHeight: '18px',
          maxWidth: '400px',
          margin: '8px 0px',
          marginBottom: props.extraSpace ? '48px' : '8px',
          display: 'block'}} >
              {props.children}</span>
    </MDXProvider>
  );
};

BrandCaption.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
      ]).isRequired,
    extraSpace: PropTypes.bool,
};

export {BrandCaption};