const Jadwal = require('../model/jadwal');
const Kereta = require('../model/keretaModel');
const Stasiun = require('../model/stasiunModel');

const postJadwal = async (req, res) => {
    try {
        await Jadwal.insertMany(req.body);
        res.json({ msg: 'Berhasil input jadwal' });
    } catch (error) {
        res.status(500).json({ msg: 'Gagal input jadwal', error });
    }
};

const getAllJadwal = async (req, res) => {
    try {
        const jadwal = await Jadwal.find()
        .populate('idKereta')
        .populate('idStasiunAwal')
        .populate('idStasiunAkhir');

        res.json(jadwal);
    } catch (error) {
        console.error('Error fetching jadwal:', error);
        res.status(500).json({ msg: 'Jadwal tidak ditemukan!', error });
    }
};

const getJadwalByTujuan = async (req, res) => {
    try {
        const jadwal = await Jadwal.find({ idStasiunAkhir: req.body.idStasiunAkhir });
        res.json(jadwal);
    } catch (error) {
        res.status(500).json({ msg: 'Jadwal tidak ditemukan!', error });
    }
};

const getJadwalByKeberangkatan = async (req, res) => {
    try {
        const jadwal = await Jadwal.find({ idStasiunAwal: req.body.idStasiunAwal });
        res.json(jadwal);
    } catch (error) {
        res.status(500).json({ msg: 'Jadwal tidak ditemukan!', error });
    }
};

const getJadwalByTanggal = async (req, res) => {
    try {
        const jadwal = await Jadwal.find({ tanggal: req.body.tanggal });
        res.json(jadwal);
    } catch (error) {
        res.status(500).json({ msg: 'Jadwal tidak ditemukan!', error });
    }
};

const putJadwal = async (req, res) => {
    try {
        await Jadwal.updateOne(
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
        res.json({ msg: 'Jadwal berhasil diupdate' });
    } catch (error) {
        res.status(500).json({ msg: 'Jadwal gagal diupdate!', error });
    }
};

const deleteJadwal = async (req, res) => {
    try {
        console.log("aaasu")
        await Jadwal.deleteOne({ _id: req.body._id });
        console.log("kkkk")
        res.json({ msg: 'Jadwal berhasil dihapus!' });
    } catch (error) {
        res.status(500).json({ msg: 'Jadwal gagal dihapus!', error });
    }
};

const postKereta = async (req, res) => {
    try {
        await Kereta.insertMany(req.body);
        res.json({ msg: 'Berhasil input kereta!' });
    } catch (error) {
        res.status(500).json({ msg: 'Gagal input kereta!', error });
    }
};

const getAllKereta = async (req, res) => {
    try {
        const kereta = await Kereta.find();
        res.json(kereta);
    } catch (error) {
        res.status(500).json({ msg: 'Kereta tidak ditemukan!', error });
    }
};

const putKereta = async (req, res) => {
    try {
        await Kereta.updateOne(
            { _id: req.body._id },
            {
                $set: {
                    namaKereta: req.body.namaKereta,
                    jumlahGerbong: req.body.jumlahGerbong
                }
            }
        );
        res.json({ msg: 'Kereta berhasil diupdate!' });
    } catch (error) {
        res.status(500).json({ msg: 'Kereta gagal diupdate!', error });
    }
};

const deleteKereta = async (req, res) => {
    try {
        await Kereta.deleteOne({ _id: req.body._id });
        res.json({ msg: 'Kereta berhasil dihapus!' });
    } catch (error) {
        res.status(500).json({ msg: 'Kereta gagal dihapus!', error });
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
