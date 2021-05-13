import React from "react";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react" ;

const BrandBox = (props) => {
  return (<MDXProvider>
      <span style={{
          color: props.color,
          fontFamily: props.font,
          fontSize: props.fontSize,
          lineHeight: props.lineHeight,
          fontWeight: props.fontWeight,
          textTransform: props.case,
          backgroundColor: props.Background ? props.Background : 'none', 
          padding: props.extraSpace ? '35px 30px' : [props.Background ? '15px 10px' : '0px'], 
          width:'100%', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px' }} >
              {props.children}</span>
    </MDXProvider>
  );
};

BrandBox.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
      ]).isRequired,
  Background: PropTypes.string,
  light: PropTypes.bool,
};

export {BrandBox};