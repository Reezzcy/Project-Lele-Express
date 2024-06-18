const Jadwal = require('../model/jadwal');
const Kereta = require('../model/keretaModel');

const postJadwal = (req, res) => {
    try{
        Jadwal.insertOne(req.body);
        res.json({msg: 'Berhasil input jadwal'});
    } catch {
        res.json({msg: 'Gagal input jadwal'});
    }
};

const getAllJadwal = async (req, res) => {
    try {
        const jadwal = await Jadwal.find();
        res.json(jadwal);
    } catch {
        res.json({msg: 'Jadwal tidak ditemukan!'});
    }
};

const getJadwalByTujuan = async (req, res) => {
    try {
        const jadwal = await Jadwal.find({ idStasiunAkhir: req.body.idStasiunAkhir});
        res.json(jadwal);
    } catch {
        res.json({msg: 'Jadwal tidak ditemukan!'});
    }
};

const getJadwalByKeberangkatan = async (req, res) => {
    try {
        const jadwal = await Jadwal.find({ idStasiunAwal: req.body.idStasiunAwal});
        res.json(jadwal);
    } catch {
        res.json({msg: 'Jadwal tidak ditemukan!'});
    }
};

const getJadwalByTanggal = async (req, res) => {
    try {
        const jadwal = await Jadwal.find({ tanggal: req.body.tanggal });
        res.json(jadwal);
    } catch {
        res.json({msg: 'Jadwal tidak ditemukan!'});
    }
};

const putJadwal = (req, res) => {
    try {
        Jadwal.updateOne(
            { _id: req.body._id },
            {
                $set: {
                    idKereta: req.body.idKereta,
                    idStasiunAwal: req.body.idStasiunAwal,
                    idStasiunAkhir: req.body.idStasiunAkhir,
                    tanggal: req.body.tanggal,
                    jam: req.body.jam
                }
            }
        );
    } catch {
        res.json({msg: 'Jadwal gagal diupdate!'});
    }
};

const deleteJadwal = (req, res) => {
    try {
        Jadwal.deleteOne({ _id: req.body._id });
        res.json({msg: 'Jadwal berhasil dihapus!'});
    } catch {
        res.json({msg: 'Jadwal gagal dihapus!'});
    }
};

const postKereta = (req, res) => {
    try {
        Kereta.insertOne(req.body);
        res.json({msg: 'Berhasil input kereta!'});
    } catch {
        res.json({msg: 'Gagal input kereta!'});
    }
};

const getAllKereta = async (req, res) => {
    try {
        const kereta = await Kereta.find();
        res.json(kereta);
    } catch {
        res.json({msg: 'Kereta tidak ditemukan!'});
    }
};

const putKereta = (req, res) => {
    try {
        Kereta.updateOne(
            { _id: req.body._id},
            {
                $set: {
                    namaKereta: req.body.namaKereta,
                    jumlahGerbong: req.body.jumlahGerbong
                }
            }
        );
        res.json({msg: 'Kereta berhasil diupdate!'});
    } catch {
        res.json({msg: 'Kereta gagal diupdate!'});
    }
};

const deleteKereta = (req, res) => {
    try {
        Kereta.deleteOne({ _id: req.body._id });
        res.json({msg: 'Kereta berhasil dihapus!'});
    } catch {
        res.json({msg: 'Kereta gagal dihapus!'});
    }
};

module.exports = { 
    postJadwal,
    getAllJadwal,
    getJadwalByTujuan,
    getJadwalByKeberangkatan,
    getJadwalByTanggal,
    putJadwal,
    deleteJadwal,
    postKereta,
    getAllKereta,
    putKereta,
    deleteKereta
};