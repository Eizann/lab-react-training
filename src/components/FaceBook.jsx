import React, { useState } from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  console.log(profiles);
  return (
    <>
      {profiles.map((profile, i) => {
        return (
          <div key={i}>
            <img
              src={profile.img}
              alt={profile.firstName}
              style={{ width: 200 }}
              onClick={() => {
                handleClick();
              }}
            />
            {isClicked && (
              <>
                <p>First name: {profile.firstName}</p>
                <p>Last name: {profile.lastName}</p>
                <p>Country: {profile.country}</p>
                <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default FaceBook;
