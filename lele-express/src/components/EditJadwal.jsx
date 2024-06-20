import React, { useState, useEffect } from "react";

function EditJadwal() {
  const [jadwal, setJadwal] = useState([]);
  const [kereta, setKereta] = useState([]);
  const [stasiun, setStasiun] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentJadwal, setCurrentJadwal] = useState(null);
  const [newJadwal, setNewJadwal] = useState({
    idKereta: "",
    idStasiunAwal: "",
    idStasiunAkhir: "",
    tanggal: "",
    jam: "",
  });

  useEffect(() => {
    fetchJadwal();
    fetchKereta();
    fetchStasiun();
  }, []);

  const fetchJadwal = () => {
    fetch("http://localhost:3000/admin/jadwal")
      .then((response) => response.json())
      .then((data) => setJadwal(data))
      .catch((error) => console.error("Error fetching jadwal data:", error));
  };

  const fetchKereta = () => {
    fetch("http://localhost:3000/admin/kereta")
      .then((response) => response.json())
      .then((data) => setKereta(data))
      .catch((error) => console.error("Error fetching kereta data:", error));
  };

  const fetchStasiun = () => {
    fetch("http://localhost:3000/admin/stasiun")
      .then((response) => response.json())
      .then((data) => setStasiun(data))
      .catch((error) => console.error("Error fetching stasiun data:", error));
  };

  const handleDelete = (id) => {
    fetch("http://localhost:3000/admin/delete-jadwal", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ _id: id }),
      credentials: "include"
    })
      .then(() => {
        setJadwal(jadwal.filter((item) => item._id !== id));
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  const handleEdit = (item) => {
    setCurrentJadwal(item);
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentJadwal({ ...currentJadwal, [name]: value });
  };

  const handleNewInputChange = (e) => {
    const { name, value } = e.target;
    setNewJadwal({ ...newJadwal, [name]: value });
  };

  const handleKeretaChange = (e) => {
    const selectedKereta = kereta.find(k => k._id === e.target.value);
    setCurrentJadwal({ 
      ...currentJadwal, 
      idKereta: selectedKereta 
    });
  };

  const handleNewKeretaChange = (e) => {
    const selectedKereta = kereta.find(k => k._id === e.target.value);
    setNewJadwal({
      ...newJadwal,
      idKereta: selectedKereta._id
    });
  };

  const handleStasiunAwalChange = (e) => {
    const selectedStasiun = stasiun.find(s => s._id === e.target.value);
    setCurrentJadwal({
      ...currentJadwal,
      idStasiunAwal: selectedStasiun
    });
  };

  const handleNewStasiunAwalChange = (e) => {
    const selectedStasiun = stasiun.find(s => s._id === e.target.value);
    setNewJadwal({
      ...newJadwal,
      idStasiunAwal: selectedStasiun._id
    });
  };

  const handleStasiunAkhirChange = (e) => {
    const selectedStasiun = stasiun.find(s => s._id === e.target.value);
    setCurrentJadwal({
      ...currentJadwal,
      idStasiunAkhir: selectedStasiun
    });
  };

  const handleNewStasiunAkhirChange = (e) => {
    const selectedStasiun = stasiun.find(s => s._id === e.target.value);
    setNewJadwal({
      ...newJadwal,
      idStasiunAkhir: selectedStasiun._id
    });
  };

  const handleSave = () => {
    fetch(`http://localhost:3000/admin/edit-jadwal`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(currentJadwal),
      credentials: "include"
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((updatedJadwal) => {
        setJadwal(jadwal.map(item => (item._id === updatedJadwal._id ? updatedJadwal : item)));
        setIsEditing(false);
        setCurrentJadwal(null);
        fetchJadwal();
      })
      .catch((error) => console.error("Error updating data:", error));
  };

  const handleAdd = () => {
    fetch("http://localhost:3000/admin/add-jadwal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJadwal),
      credentials: "include"
    })
      .then((response) => response.json())
      .then((newItem) => {
        setJadwal([...jadwal, newItem]);
        setNewJadwal({
          idKereta: "",
          idStasiunAwal: "",
          idStasiunAkhir: "",
          tanggal: "",
          jam: "",
        });
        fetchJadwal(); // Panggil fetchJadwal setelah menambahkan jadwal baru
      })
      .catch((error) => console.error("Error adding data:", error));
  };

  return (
    <div className="bg-blue-500 p-4 rounded-lg shadow-lg text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Edit Jadwal</h2>
        <button
          onClick={() => setIsEditing(false)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Add Jadwal
        </button>
      </div>
      {isEditing ? (
        <div className="bg-gray-300 p-4 rounded-lg shadow-md text-black">
          <label>
            Nama Kereta:
            <select value={currentJadwal.idKereta._id} onChange={handleKeretaChange}>
              {kereta.map((k) => (
                <option key={k._id} value={k._id}>{k.namaKereta}</option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Stasiun Awal:
            <select value={currentJadwal.idStasiunAwal._id} onChange={handleStasiunAwalChange}>
              {stasiun.map((s) => (
                <option key={s._id} value={s._id}>{s.namaStasiun}</option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Stasiun Akhir:
            <select value={currentJadwal.idStasiunAkhir._id} onChange={handleStasiunAkhirChange}>
              {stasiun.map((s) => (
                <option key={s._id} value={s._id}>{s.namaStasiun}</option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Jumlah Gerbong:
            <input type="text" name="jumlahGerbong" value={currentJadwal.idKereta.jumlahGerbong} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Tanggal:
            <input type="text" name="tanggal" value={currentJadwal.tanggal} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Jam:
            <input type="text" name="jam" value={currentJadwal.jam} onChange={handleInputChange} />
          </label>
          <br />
          <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
            Cancel
          </button>
        </div>
      ) : (
        <div className="bg-gray-300 p-4 rounded-lg shadow-md text-black">
          <h3 className="text-xl font-bold mb-4">Tambah Jadwal Baru</h3>
          <label>
            Nama Kereta:
            <select value={newJadwal.idKereta._id} onChange={handleNewKeretaChange}>
              {kereta.map((k) => (
                <option key={k._id} value={k._id}>{k.namaKereta}</option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Stasiun Awal:
            <select value={newJadwal.idStasiunAwal._id} onChange={handleNewStasiunAwalChange}>
              {stasiun.map((s) => (
                <option key={s._id} value={s._id}>{s.namaStasiun}</option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Stasiun Akhir:
            <select value={newJadwal.idStasiunAkhir._id} onChange={handleNewStasiunAkhirChange}>
              {stasiun.map((s) => (
                <option key={s._id} value={s._id}>{s.namaStasiun}</option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Tanggal:
            <input type="text" name="tanggal" value={newJadwal.tanggal} onChange={handleNewInputChange} />
          </label>
          <br />
          <label>
            Jam:
            <input type="text" name="jam" value={newJadwal.jam} onChange={handleNewInputChange} />
          </label>
          <br />
          <button onClick={handleAdd} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {jadwal.map((item) => (
          <div key={item._id} className="bg-gray-300 p-4 rounded-lg shadow-md text-black">
              <p><strong>Nama Kereta:</strong> {item.idKereta ? item.idKereta.namaKereta : ""}</p>
              <p><strong>Stasiun Awal:</strong> {item.idStasiunAwal ? item.idStasiunAwal.namaStasiun : ""}</p>
              <p><strong>Stasiun Akhir:</strong> {item.idStasiunAkhir ? item.idStasiunAkhir.namaStasiun : ""}</p>
              <p><strong>Jumlah Gerbong:</strong> {item.idKereta ? item.idKereta.jumlahGerbong : ""}</p>
              <p><strong>Tanggal:</strong> {item.tanggal}</p>
              <p><strong>Jam:</strong> {item.jam}</p>
            <div className="mt-4">
              <button onClick={() => handleEdit(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button onClick={() => handleDelete(item._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditJadwal;
