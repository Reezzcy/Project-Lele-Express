import React, { useState, useEffect } from "react";

function DaftarRiwayat() {
  const [transaksi, setTransaksi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/transaksi/id", {
      method: "GET",
      credentials: "include"
    })
      .then((response) => response.json())
      .then((data) => {
        setTransaksi(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-blue-500 p-4 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-bold mb-4">Daftar Riwayat Tiket</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-500 p-4 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Daftar Riwayat Tiket</h2>
      {transaksi.length === 0 ? (
        <p>Tidak ada riwayat tiket.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {transaksi.map((item) => (
            <div
              key={item._id.$oid || item._id}
              className="bg-gray-300 p-4 rounded-lg shadow-md text-black cursor-pointer"
            >
              <p><strong>Nama:</strong> {item.nama}</p>
              <p><strong>Nomor Bangku:</strong> {item.noBangku}</p>
              <p><strong>Status:</strong> {item.status ? "Aktif" : "Tidak Aktif"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DaftarRiwayat;
