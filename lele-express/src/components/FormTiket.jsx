import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function FormTiket() {
  const location = useLocation();
  const { jadwal } = location.state;
  const [nama, setNama] = useState('');
  const [noBangku, setNoBangku] = useState('');
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tiketData = {
      idJadwal: jadwal._id,
      nama,
      noBangku,
      status,
    };

    try {
      await fetch('http://localhost:3000/transaksi/add-tiket', {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tiketData),
      });
      navigate('/dashboardUser');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleCancel = () => {
    navigate('/dashboardUser');
  };

  return (
    <div className="bg-gray-300 p-4 rounded-lg shadow-lg text-black">
      <h2 className="text-2xl font-bold mb-4">Pesan Tiket</h2>
      <form onSubmit={handleSubmit}>
        <input type="hidden" value={jadwal._id} name="idJadwal" />
        <div className="mb-4">
          <label className="block text-black">Nama</label>
          <input 
            type="text" 
            className="w-full p-2 rounded-lg"
            placeholder="Nama"
            value={nama} 
            onChange={(e) => setNama(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-black">No Bangku</label>
          <select
            className="w-1/2 p-2 rounded-lg"
            value={noBangku}
            onChange={(e) => setNoBangku(e.target.value)}
            required
          >
            <option value="">Pilih No Bangku</option>
            {[...Array(40).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-black">Status</label>
          <input 
            type="checkbox" 
            className="form-control" 
            checked={status} 
            onChange={(e) => setStatus(e.target.checked)} 
          />
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 p-2 rounded-lg text-white">Pesan</button>
          <button type="button" onClick={handleCancel} className="bg-red-500 p-2 rounded-lg text-white">Batal</button>
        </div>
      </form>
    </div>
  );
}

export default FormTiket;
