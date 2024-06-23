import React, { useState, useEffect } from "react";

function EditProfile() {
  const [profile, setProfile] = useState({
    nama: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  useEffect(() => {
    fetch("http://localhost:3000/profile/id", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error("Error fetching profile data:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/profile/edit", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });

      if (response.ok) {
        setSuccessMessage("Profile updated successfully!");
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      {successMessage && (
        <div className="mb-4 p-2 text-green-700 bg-green-100 rounded-lg">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-black">Nama</label>
          <input
            type="text"
            name="nama"
            className="w-full p-2 rounded-lg"
            value={profile.nama}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 rounded-lg"
            value={profile.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full p-2 rounded-lg pr-10"
              value={profile.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.071 4.929a2 2 0 00-2.828 0l-1.414 1.414a2 2 0 000 2.828l3.536 3.536a2 2 0 002.828 0l1.414-1.414a2 2 0 000-2.828l-3.536-3.536z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.071 7.929a2 2 0 00-2.828 0l-9.192 9.192a2 2 0 002.828 2.828l9.192-9.192a2 2 0 000-2.828z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button type="submit" className="bg-blue-500 p-2 rounded-lg text-white">
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
