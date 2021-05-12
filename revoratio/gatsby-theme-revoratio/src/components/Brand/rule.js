import React from "react"
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';

const BrandRule = (props) => {
  return (<div>
    <p> { props.do ? <IoCheckmarkCircleOutline color='#00B775' size='25'/> : <IoCloseCircleOutline color='#eb5757' size='25'/> } {props.rule}</p>
    </div>
  );
};

export {BrandRule};