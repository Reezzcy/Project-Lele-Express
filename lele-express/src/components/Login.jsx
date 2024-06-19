import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const users = await response.json();
      const user = users.find(
        (user) =>
          user.nama === nama &&
          user.email === email &&
          user.password === password
      );

      if (user) {
        setMessage(`Welcome ${user.nama}!`);
        if (email.endsWith("@admin.lele.com")) {
          navigate("/dashboard-admin");
        } else {
          navigate("/dashboard-user");
        }
      } else {
        setMessage("Invalid email or password");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      console.error("There was an error with the login request:", error);
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
              to="/register"
              className="w-full md:w-1/2 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Registration
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-center mb-6">LOGIN</h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                name="nama"
                placeholder="Username"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
          {message && (
            <p className="mt-4 text-center text-red-600">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
