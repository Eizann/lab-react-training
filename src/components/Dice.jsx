import React, { useState } from 'react';

const Dice = () => {
  const arrOfDices = [
    'dice-empty.png',
    'dice1.png',
    'dice2.png',
    'dice3.png',
    'dice4.png',
    'dice5.png',
    'dice6.png',
  ];

  const [dice, setDice] = useState(
    Math.floor(Math.random() * (arrOfDices.length - 1) + 1)
  );

  const handleClick = () => {
    setDice(0);
    setTimeout(() => {
      setDice(Math.floor(Math.random() * (arrOfDices.length - 1) + 1));
    }, 1000);
  };
  return (
    <div>
      <img
        src={`./${arrOfDices[dice]}`}
        alt=""
        style={{ width: 100 }}
        onClick={() => {
          handleClick();
        }}
      />
    </div>
  );
};

export default Dice;
