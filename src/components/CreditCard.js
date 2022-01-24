import React from 'react';
import Visa from '../assets/images/visa.png';
import Mastercard from '../assets/images/master-card.svg'

const CreditCard = (props) => {
    function isVisaOrMastercard() {
        if(props.type === "Visa") {
            return <img style={{width: "50px"}} src={Visa} alt="{props.type}" />
        } else {
            return <img style={{width: "50px"}} src={Mastercard} alt="{props.type}" />
        }
    }
    const divStyle = {
        backgroundColor: props.bgColor, 
        color: props.color,
        width: "700px",
    }

  return (
    <div style={divStyle}>
      {isVisaOrMastercard()}
      <p>{props.number}</p>
      <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
      <p>{props.owner}</p>
    </div>
      );
};

export default CreditCard;
