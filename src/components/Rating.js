import React from 'react';

const Rating = (props) => {
    function stars() {
        const rating = Math.round(props.children);
        let rate = "";

        for(let i=0; i < 5; i++) {
            if (i < rating) {
                rate += '★';
            } else rate += '☆';
        }
        return rate;
    }
  return (
    <div>
        {stars()}
    </div>
  )
};

export default Rating;
