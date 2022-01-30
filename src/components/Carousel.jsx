import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [imgList, setImgList] = useState(images);
  const [img, setImg] = useState(imgList[0]);

  const handleLeftClick = () => {
    switch (img) {
      case imgList[0]:
        setImg(imgList[3]);
        break;
      case imgList[3]:
        setImg(imgList[2]);
        break;
      case imgList[2]:
        setImg(imgList[1]);
        break;
      case imgList[1]:
        setImg(imgList[0]);
        break;
      default:
    }
  };
  const handleRightClick = () => {
    switch (img) {
      case imgList[0]:
        setImg(imgList[1]);
        break;
      case imgList[1]:
        setImg(imgList[2]);
        break;
      case imgList[2]:
        setImg(imgList[3]);
        break;
      case imgList[3]:
        setImg(imgList[0]);
        break;
      default:
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          handleLeftClick();
        }}
      >
        Left
      </button>
      <img src={img} alt="" style={{ width: 200 }} />
      <button
        onClick={() => {
          handleRightClick();
        }}
      >
        Right
      </button>
    </div>
  );
};

export default Carousel;
