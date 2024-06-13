const Jadwal = require('../model/jadwal');
const Kereta = require('../model/keretaModel');

const postJadwal = (req) => {
    Jadwal.insertOne(req.body);
};

const getAllJadwal = () => {
    return Jadwal.find().toArray((error, result) => result);
};

const getJadwalByTujuan = (idStasiun) => {
    return Jadwal.find({ idStasiunAkhir: idStasiun}).toArray((error, result) => result);
};

const getJadwalByKeberangkatan = (idStasiun) => {
    return Jadwal.find({ idStasiunAkhir: idStasiun}).toArray((error, result) => result);
};

const getJadwalByTanggal = (tanggal) => {
    return Jadwal.find({ tanggal }).toArray((error, result) => result);
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

const getAllKereta = () => {
    return Kereta.find().toArray((error, result) => result);
};

const putKereta = (req) => {
    Kereta.updateOne(
        { _id: req.body._id},
        {
            $set: {
                
            }
        }
    );
};
