import React, { useState } from "react";
import { Link } from "react-router-dom";

function Registration() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

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

    try {
      const response = await fetch("localhost:3000/profile/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setMessage("Registration successful!");
        setNama("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setMessage("Registration failed!");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      console.error("There was an error with the registration request:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div
          className="w-full md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/lele_express.jpg')" }}
        >
          <div className="flex flex-col justify-center h-full p-8 bg-black bg-opacity-50">
            <h2 className="text-3xl font-bold text-white mb-4">
              Butuh Tiket Kereta?
              <br />
              Lele Ekspress Aja!
            </h2>
            <p className="text-white mb-4"></p>
            <Link
              to="/"
              className="w-full md:w-1/2 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-center mb-6">REGISTRATION</h1>
          <form className="space-y-4" onSubmit={handleRegistration}>
            <div>
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                name="user"
                placeholder="Username"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="someone@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="passu"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="pass1"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
          {message && (
            <p className="mt-4 text-center text-green-600">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Registration;
