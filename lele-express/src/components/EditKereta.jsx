import React, { useState, useEffect } from "react";

function EditKereta() {
  const [kereta, setKereta] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newKereta, setNewKereta] = useState({
    namaKereta: "",
    jumlahGerbong: "",
  });
  
  useEffect(() => {
    fetchKereta()
  }, []);


  const fetchKereta = () => {
    // Fetch schedule data from the JSON server
    fetch("http://localhost:3000/admin/kereta")
      .then((response) => response.json())
      .then((data) => setKereta(data))
      .catch((error) => console.error("Error fetching data:", error));
  }

  const handleDelete = (id) => {
    fetch("http://localhost:3000/admin/delete-kereta", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
      credentials: "include",
    })
      .then(() => {
        // Remove the deleted item from the state
        setKereta(kereta.filter((item) => item._id !== id));
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  const handleEdit = (id) => {
    // Handle edit functionality here
    console.log("Edit schedule with id:", id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewKereta({ ...newKereta, [name]: value });
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
        setIsAdding(false); // Keluar dari mode tambah setelah berhasil menambahkan
      })
      .catch((error) => console.error("Error adding data:", error));
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Edit Kereta</h2>
      <div className="mb-4">
        <button
          onClick={() => setIsAdding(true)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Tambah Kereta
        </button>
      </div>
      {isAdding ? (
        <div className="bg-gray-300 p-4 rounded-lg shadow-md text-black mb-4">
          <h3 className="text-xl font-bold mb-4">Tambah Kereta Baru</h3>
          <label>
            Nama Kereta:
            <input
              type="text"
              name="namaKereta"
              value={newKereta.namaKereta}
              onChange={handleInputChange}
              className="ml-2"
            />
          </label>
          <br />
          <label>
            Jumlah Gerbong:
            <input
              type="text"
              name="jumlahGerbong"
              value={newKereta.jumlahGerbong}
              onChange={handleInputChange}
              className="ml-2"
            />
          </label>
          <br />
          <button
            onClick={handleAddKereta}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Simpan
          </button>
          <button
            onClick={() => setIsAdding(false)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
          >
            Batal
          </button>
        </div>
      ) : null}
      {kereta.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {kereta.map((item) => (
          <div
            key={item._id} // Pastikan item._id adalah unik
            className="bg-gray-300 p-4 rounded-lg shadow-md text-black"
          >
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
          ))}
        </div>
      )}
    </div>
  );
}

export default EditKereta;
