import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DaftarJadwal() {
  const [jadwal, setJadwal] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch schedule data from the JSON server
    fetch("http://localhost:3000/user/jadwal")
      .then((response) => response.json())
      .then((data) => setJadwal(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleClick = (id) => {
    navigate(`/formTiket`);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Edit Jadwal</h2>
      <p className="text-white mb-4"></p>
      {jadwal.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jadwal.map((item) => (
            <div
              key={item._id}
              onClick={() => handleClick(item._id)}
              className="bg-gray-300 p-4 rounded-lg shadow-md text-black cursor-pointer"
            >
              <p><strong>Nama Kereta:</strong> {item.idKereta.namaKereta}</p>
              <p><strong>Stasiun Awal:</strong> {item.idStasiunAwal.namaStasiun}</p>
              <p><strong>Stasiun Akhir:</strong> {item.idStasiunAkhir.namaStasiun}</p>
              <p><strong>Jumlah Gerbong:</strong> {item.idKereta.jumlahGerbong}</p>
              <p><strong>Tanggal:</strong> {item.tanggal}</p>
              <p><strong>Jam:</strong> {item.jam}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DaftarJadwal;
