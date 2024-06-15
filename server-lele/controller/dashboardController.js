const Jadwal = require('../model/jadwal');
const Kereta = require('../model/keretaModel');

const postJadwal = async (req) => {
    await Jadwal.insertOne(req.body);
};

const getAllJadwal = async () => {
    return await Jadwal.find();
};

const getJadwalByTujuan = async (req) => {
    return await Jadwal.find({ idStasiunAkhir: req.body.idStasiunAkhir});
};

const getJadwalByKeberangkatan = async (req) => {
    return await Jadwal.find({ idStasiunAwal: req.body.idStasiunAkhir});
};

const getJadwalByTanggal = async (req) => {
    return await Jadwal.find({ tanggal: req.body.tanggal });
};

const putJadwal = (req) => {
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
};

const deleteJadwal = (req) => {
    Jadwal.deleteOne({ _id: req.body._id });
};

const postKereta = (req) => {
    Kereta.insertOne(req.body);
};

const getAllKereta = async (req, res) => {
    res.json(await Kereta.find());
};

const putKereta = (req) => {
    Kereta.updateOne(
        { _id: req.body._id},
        {
            $set: {
                namaKereta: req.body.namaKereta,
                jumlahGerbong: req.body.jumlahGerbong
            }
        }
    );
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
    putKereta
};