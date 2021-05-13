import React from "react";
import PropTypes from "prop-types";

const BrandFont = (props) => {
  return (
  <div style={{
    marginBottom:'16px', 
    display:'flex', 
    flexDirection:'column', 
    justifyContent:'space-between'}}>
    <p style={{ 
      fontFamily: props.font, 
      color: props.light ? '#828282' : 'inherit', 
      fontSize:'32px', 
      lineHeight:'48px'
      }}>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 1 2 3 4 5 6 7 8 9 0 ? ! @ # $ % & </p>
    <span style={{
      textTransform: 'uppercase', 
      bottom:'0', 
      backgroundColor: '#F4F4F4', 
      padding:'4px 8px', 
      borderRadius:'5px', 
      fontSize:'12px'
      }}>{props.fontName}</span>
  </div>
  );
};


BrandFont.propTypes = {
  font: PropTypes.string,
  light: PropTypes.bool
};


export {BrandFont};

