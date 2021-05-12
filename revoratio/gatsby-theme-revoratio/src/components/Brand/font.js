import React from "react"

const BrandFont = (props) => {
  return (<div>
    <p style={{ fontFamily: props.fontFamily, color: `teal`, fontSize:`2rem`, lineHeight:`2.7rem`}}>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 1 2 3 4 5 6 7 8 9 0 ? ! @ # $ % & </p>
    <p>{props.fontName}</p>
  </div>
  );
};

export {BrandFont};