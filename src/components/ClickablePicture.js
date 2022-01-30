import React, { Component, useState } from 'react';

const ClickablePicture = (props) => {
  const [clicked, setClicked] = useState(false);

  const handlePicture = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <img
        src={clicked ? props.imgClicked : props.img}
        alt={props.name}
        onClick={() => {
          handlePicture();
        }}
      />
    </div>
  );
};

export default ClickablePicture;
