// src/components/EditJadwal.jsx
import React, { useState, useEffect } from "react";

function EditJadwal() {
  const [jadwal, setJadwal] = useState([]);

  useEffect(() => {
    // Fetch schedule data from the JSON server
    fetch("localhost:3000/admin/jadwal")
      .then((response) => response.json())
      .then((data) => setJadwal(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`localhost:3000/admin/jadwal${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Remove the deleted item from the state
        setJadwal(jadwal.filter((item) => item.idKereta.$oid !== id));
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  const handleEdit = (id) => {
    // Handle edit functionality here
    console.log("Edit schedule with id:", id);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Edit Jadwal</h2>
      {jadwal.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jadwal.map((item) => (
            <div
              key={item.idKereta.$oid}
              className="bg-gray-300 p-4 rounded-lg shadow-md"
            >
              <p><strong>Id Kereta:</strong> {item.idKereta.$oid}</p>
              <p><strong>Nama Kereta:</strong> {item.namaKereta}</p>
              <p><strong>Stasiun Awal:</strong> {item.stasiunAwal.$oid}</p>
              <p><strong>Stasiun Akhir:</strong> {item.stasiunAkhir.$oid}</p>
              <p><strong>Jumlah Gerbong:</strong> {item.jumlahGerbong}</p>
              <div className="mt-4">
                <button
                  onClick={() => handleEdit(item.idKereta.$oid)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.idKereta.$oid)}
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

export default EditJadwal;