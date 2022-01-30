import React from 'react';
import { useState } from 'react';

let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
let currentColor = '';

const LikeButton = () => {
  const [like, setLike] = useState(0);

  const handleClick = () => {
    setLike((prevLike) => prevLike + 1);
    currentColor = colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      {/* <button onClick={() => setLike(like + 1)}>{like} Likes</button> */}

      <button
        onClick={() => handleClick()}
        style={{ backgroundColor: currentColor }}
      >
        {like} Likes
      </button>
      <button onClick={() => handleClick()}>{like} Likes</button>
    </div>
  );
};

export default LikeButton;
