import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={() => handleSubmit()}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label htmlFor="nationality">Nationality</label>
        <select
          name="nationality"
          id="nationality"
          value={nationality}
          onChange={(e) => {
            setNationality(e.target.value);
            console.log(nationality);
          }}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>

        <button>Sign up</button>
      </form>
      <p></p>
      <p>Your email is: {email}</p>
    </>
  );
};

export default SignupPage;
