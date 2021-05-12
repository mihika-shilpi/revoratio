import React from "react"

const BrandColour = (props) => {
  return (<div>
      <div style={{ backgroundColor: props.colourHex, height:`6rem`, padding:`4rem 0.5rem 0.5rem 0.5rem` }}>
          <span style={{backgroundColor: `white`, padding:`2px 4px`}}>{props.colourHex}</span>
      </div>
      <p>
        <span className="label">R</span>{props.colourR} 
        <span className="label">  G</span>{props.colourG} 
        <span className="label">  B</span>{props.colourB}
        <br></br>
        <span className="label">C</span>{props.colourC}  
        <span className="label">  M</span>{props.colourM}  
        <span className="label">  Y</span>{props.colourY}  
        <span className="label">  K</span>{props.colourK}
        <br></br>
        <span className="label">Pantone </span>{props.colourPantone}
    </p>
  </div>
  );
};

export {BrandColour};