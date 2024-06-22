import React, { useState, useEffect } from "react";

function EditKereta() {
  const [kereta, setKereta] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentKereta, setCurrentKereta] = useState(null);
  const [newKereta, setNewKereta] = useState({
    namaKereta: "",
    jumlahGerbong: "",
  });

  useEffect(() => {
    fetchKereta();
  }, []);

  const fetchKereta = () => {
    fetch("http://localhost:3000/admin/kereta", {
      method: "GET",
      credentials: "include"
    })
      .then((response) => response.json())
      .then((data) => setKereta(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/admin/delete-kereta`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
      credentials: "include",
    })
      .then(() => {
        setKereta(kereta.filter((item) => item._id !== id));
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  const handleEdit = (id) => {
    const selectedKereta = kereta.find((item) => item._id === id);
    setCurrentKereta(selectedKereta);
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isEditing) {
      setCurrentKereta({ ...currentKereta, [name]: value });
    } else {
      setNewKereta({ ...newKereta, [name]: value });
    }
  };


  const handleUpdateKereta = () => {
    fetch(`http://localhost:3000/admin/edit-kereta`, {
      method: "PUT", // Gunakan PUT atau PATCH sesuai dengan API Anda
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentKereta),
      credentials: "include",
    })
      .then(() => {
        const updatedKereta = kereta.map((item) =>
          item._id === currentKereta._id ? currentKereta : item
        );
        setKereta(updatedKereta);
        setCurrentKereta(null);
        setIsEditing(false);
      })
      .catch((error) => console.error("Error updating data:", error));
  };

  const handleAddKereta = () => {
    fetch("http://localhost:3000/admin/add-kereta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newKereta),
      credentials: "include",
    })
      .then((response) => response.json())
      .then((newItem) => {
        setKereta([...kereta, newItem]);
        setNewKereta({
          namaKereta: "",
          jumlahGerbong: "",
        });
        fetchKereta();
        setIsAdding(false);
      })
      .catch((error) => console.error("Error adding data:", error));
  };

  return (
    <div className="bg-blue-500 p-4 rounded-lg shadow-lg text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Edit Kereta</h2>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          {isAdding ? "Batal Tambah Kereta" : "Tambah Kereta"}
        </button>
      </div>
      {isAdding && (
        <div className="bg-gray-300 p-4 rounded-lg shadow-md text-black mb-4">
          <h3 className="text-xl font-bold mb-4">Tambah Kereta Baru</h3>
          <div className="mb-4">
            <label className="block mb-1">
              Nama Kereta:
            </label>
            <input
              type="text"
              name="namaKereta"
              value={newKereta.namaKereta}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-400 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">
              Jumlah Gerbong:
            </label>
            <input
              type="text"
              name="jumlahGerbong"
              value={newKereta.jumlahGerbong}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-400 rounded"
            />
          </div>
          <button
            onClick={handleAddKereta}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Tambah
          </button>
          <button
            onClick={() => setIsAdding(false)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
          >
            Batal
          </button>
        </div>
      )}
      {kereta.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {kereta.map((item) => (
            <div
              key={item._id}
              className="bg-gray-300 p-4 rounded-lg shadow-md text-black slide-in-bottom"
            >
              {isEditing && currentKereta._id === item._id ? (
                <div>
                  <div className="mb-4">
                    <label className="block mb-1">
                      Nama Kereta:
                    </label>
                    <input
                      type="text"
                      name="namaKereta"
                      value={currentKereta.namaKereta}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-400 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">
                      Jumlah Gerbong:
                    </label>
                    <input
                      type="text"
                      name="jumlahGerbong"
                      value={currentKereta.jumlahGerbong}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-400 rounded"
                    />
                  </div>
                  <button
                    onClick={handleUpdateKereta}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  >
                    Simpan
                  </button>
                  <button
                    onClick={() => {
                      setCurrentKereta(null);
                      setIsEditing(false);
                    }}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
                  >
                    Batal
                  </button>
                </div>
              ) : (
                <div>
                  <p><strong>Nama Kereta:</strong> {item.namaKereta}</p>
                  <p><strong>Jumlah Gerbong:</strong> {item.jumlahGerbong}</p>
                  <div className="mt-4">
                    <button
                      onClick={() => handleEdit(item._id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EditKereta;
