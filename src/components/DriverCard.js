import React from 'react';

const DriverCard = (props) => {
    function stars() {
        const rating = Math.round(props.rating);
        let rate = "";

        for(let i=0; i < 5; i++) {
            if (i < rating) {
                rate += '★';
            } else rate += '☆';
        }
        return rate;
    }
  return <div>
      <h3>{props.name}</h3>
      <img style={{width: '250px'}}src={props.img} alt={props.name} />
      {stars()}
      <p>{props.car.model} - {props.car.licensePlate}</p>
  </div>;
};

export default DriverCard;
