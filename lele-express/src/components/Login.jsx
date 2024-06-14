import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [nama, setNama] = useState(''); 
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/user');
    const user = await response.json();
    const users = user.find(users => 
      users.nama === nama && 
      users.password === password &&
      users.email === email
    );

    if (users) {
      setMessage(`Welcome ${users.nama}!`);
    } else {
      setMessage('Invalid username, email, or password');
    }
  };

  return (
    <>
      <form className='form' onSubmit={handleLogin}>
        <h1 className='title'>Login</h1>
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

export default Login;
