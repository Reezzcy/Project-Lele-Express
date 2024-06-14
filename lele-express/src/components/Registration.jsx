import React, { useState } from 'react';

function Registration() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    const newUser = {
      nama,
      email,
      password,
    };

    const response = await fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    if (response.ok) {
      setMessage("Registration successful!");
      setNama('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      setMessage("Registration failed!");
    }
  };

  return (
    <>
      <form className='form' onSubmit={handleRegistration}>
        <h1 className='title'>Registration</h1>
        <label>Username</label>
        <input
          type="text"
          name="user"
          placeholder='Username'
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder='someone@gmail.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name="passu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="pass1"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <label></label>
        <input
          type="submit"
          value="Submit"
          className='button'
        />
      </form>
      {message && <p>{message}</p>}
    </>
  );
}

export default Registration;
