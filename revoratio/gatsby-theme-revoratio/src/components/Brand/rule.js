import React from "react";
import PropTypes from "prop-types";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { MDXProvider } from "@mdx-js/react" ;

const BrandRule = (props) => {
  return (
    <span style={{ 
      backgroundColor: props.Background ? [ props.do ? '#F6F9F8': '#FFF6F6'] : 'none' , 
      padding: props.Background ? '15px 10px' : '0px 8px', 
      width:'100%', 
      display: 'flex', 
      margin: '8px 0px'}}>
      <span style={{ marginRight: '15px'}}> 
      { props.do ? <IoCheckmarkCircleOutline color='#00B775' size='25'/> : <IoCloseCircleOutline color='#eb5757' size='25'/> } 
      </span>
      <MDXProvider><span style={{
        color: props.color,
        fontFamily: props.font,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight
      }}>{props.children}</span></MDXProvider>
    </span>
  );
};

BrandRule.defaultProps = {
  do: true,
  Background: false,
};

BrandRule.propTypes = {
  children: PropTypes.node,
  do: PropTypes.bool,
  Background: PropTypes.bool,
  color: PropTypes.string,
  font: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
};

export {BrandRule};