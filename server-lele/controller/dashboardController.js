const Jadwal = require('../model/jadwal');
const Kereta = require('../model/keretaModel');
const Stasiun = require('../model/stasiunModel');

const postJadwal = async (req, res) => {
    try {
        console.log(req.body);
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

const getJadwalById = async (req, res) => {
    try {
        const jadwal = await Jadwal.find({ _id: req.body.id })
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
        const jadwal = await Jadwal.find({ idStasiunAkhir: req.body.idStasiunAkhir })
        .populate('idKereta')
        .populate('idStasiunAwal')
        .populate('idStasiunAkhir');

        res.json(jadwal);
    } catch (error) {
        res.status(500).json({ msg: 'Jadwal tidak ditemukan!', error });
    }
};

const getJadwalByKeberangkatan = async (req, res) => {
    try {
        const jadwal = await Jadwal.find({ idStasiunAwal: req.body.idStasiunAwal })
        .populate('idKereta')
        .populate('idStasiunAwal')
        .populate('idStasiunAkhir');

        res.json(jadwal);
    } catch (error) {
        res.status(500).json({ msg: 'Jadwal tidak ditemukan!', error });
    }
};

const getJadwalByTanggal = async (req, res) => {
    try {
        const jadwal = await Jadwal.find({ tanggal: req.body.tanggal })
        .populate('idKereta')
        .populate('idStasiunAwal')
        .populate('idStasiunAkhir');

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
        console.log('hep')
        console.log(req.body)
        await Jadwal.deleteOne({ _id: req.body._id });
        console.log('hep')
        res.json({ msg: 'Jadwal berhasil dihapus!' });
    } catch (error) {
        res.status(500).json({ msg: 'Jadwal gagal dihapus!', error });
    }
};

const postKereta = async (req, res) => {
    try {
        console.log(req.body);
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

const getAllStasiun = async (req, res) => {
    try {
        const stasiun = await Stasiun.find();
        res.json(stasiun);
    } catch (error) {
        res.status(500).json({ msg: 'Stasiun tidak ditemukan!', error });
    }
};

module.exports = { 
    postJadwal,
    getAllJadwal,
    getJadwalById,
    getJadwalByTujuan,
    getJadwalByKeberangkatan,
    getJadwalByTanggal,
    putJadwal,
    deleteJadwal,
    postKereta,
    getAllKereta,
    putKereta,
    deleteKereta,
    getAllStasiun
};