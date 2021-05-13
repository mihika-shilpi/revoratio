import React from "react"

const BrandColor = (props) => {
  return (<div style={{
    display: 'flex',
    flexDirection: props.flex,
    gap: '16px'
  }}>

      <span style={{ 
        backgroundColor: props.colorHex, 
        height:`7rem`,
        minWidth: '7rem',
        display: 'inline-block',
        flexGrow:'1',
        border: '1px solid #bdbdbd'
         }}>
      </span>

      <span style={{
        flexGrow:'100'
      }}>

      <span style={{
            fontWeight: '800',
            display: 'block',
            }}>
              {props.colorName}</span>

      <span style={{
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '24px'
      }}>

      {props.colorRGB && (<span style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        }}>
        <span style={{color: "#bdbdbd"}}>RGB </span>{props.colorRGB}
        </span>)}

      {props.colorCMYK && (<span style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        }}>
        <span style={{color: "#bdbdbd"}}>CMYK </span>{props.colorCMYK}
        </span>)}

      <span style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        }}>
        <span style={{color: "#bdbdbd"}}>HEX </span>{props.colorHex}
        </span>

  </span>
  </span>
  </div>
  );
};

BrandColor.defaultProps = {
  flex: 'column',
};

export {BrandColor};