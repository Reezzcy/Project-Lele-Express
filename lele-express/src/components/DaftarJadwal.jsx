import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DaftarJadwal() {
  const [jadwal, setJadwal] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/user/jadwal", {
      method: "GET",
      credentials: "include"
    })
      .then((response) => response.json())
      .then((data) => setJadwal(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handlePesanTiket = (jadwal) => {
    navigate('/FormTiket', { state: { jadwal } });
  };

  return (
    <div className="bg-blue-500 p-4 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Daftar Jadwal</h2>
      {jadwal.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jadwal.map((item) => (
            <div
              key={item._id}
              className="bg-gray-300 p-4 rounded-lg shadow-md text-black"
            >
              <p><strong>Nama Kereta:</strong> {item.idKereta.namaKereta}</p>
              <p><strong>Stasiun Awal:</strong> {item.idStasiunAwal.namaStasiun}</p>
              <p><strong>Stasiun Akhir:</strong> {item.idStasiunAkhir.namaStasiun}</p>
              <p><strong>Jumlah Gerbong:</strong> {item.idKereta.jumlahGerbong}</p>
              <p><strong>Tanggal:</strong> {item.tanggal}</p>
              <p><strong>Jam:</strong> {item.jam}</p>
              <button
                onClick={() => handlePesanTiket(item)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Pesan Tiket
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DaftarJadwal;
