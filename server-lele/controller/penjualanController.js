const Jadwal = require('../model/jadwal');
const Penjualan = require('../model/penjualan');

const getPenjualan = async (req, res) => {
    try {
        const penjualan = await Penjualan.find();
        res.json(penjualan);
    } catch {
        res.json({msg: 'Penjualan tidak ditemukan!'});
    }
};

const getPenjualanByTujuan = async (req, res) => {
    try {
        const jadwals = await Jadwal.find({ _id: req.body.idStasiunAkhir });
        const penjualans = await Penjualan.find();
    
        const filteredPenjualans = penjualans.filter(penjualan => {
            return jadwals.some(jadwal => {
                jadwal._id.equals(penjualan.idJadwal);
            });
        });
    
        const result = filteredPenjualans.map(penjualan => {
            const jadwal = jadwals.find(jadwal => jadwal._id.equals(penjualan.idJadwal));
            return {
                jadwalDetails: {
                    idKereta: jadwal.idKereta,
                    idStasiunAwal: jadwal.idStasiunAwal,
                    idStasiunAkhir: idStasiunAkhir,
                    tanggal: jadwal.tanggal,
                    jam: jadwal.jam
                },
                jumlahPenjualan
            };
        });
    
        res.json(result);
    } catch {
        res.json({msg: 'Penjualan tidak ditemukan!'});
    }
};

const getPenjualanByKeberangkatan = async (req, res) => {
    try {
        const jadwals = await Jadwal.find({ _id: req.body.idStasiunAwal });
        const penjualans = await Penjualan.find();
    
        const filteredPenjualans = penjualans.filter(penjualan => {
            return jadwals.some(jadwal => {
                jadwal._id.equals(penjualan.idJadwal);
            });
        });
    
        const result = filteredPenjualans.map(penjualan => {
            const jadwal = jadwals.find(jadwal => jadwal._id.equals(penjualan.idJadwal));
            return {
                jadwalDetails: {
                    idKereta: jadwal.idKereta,
                    idStasiunAwal: jadwal.idStasiunAwal,
                    idStasiunAkhir: idStasiunAkhir,
                    tanggal: jadwal.tanggal,
                    jam: jadwal.jam
                },
                jumlahPenjualan
            };
        });
    
        res.json(result);
    } catch {
        res.json({msg: 'Penjualan tidak ditemukan!'});
    }
};

const getPenjualanByTanggal = async (req, res) => {
    try {
        const jadwals = await Jadwal.find({ _id: req.body.tanggal });
        const penjualans = await Penjualan.find();
    
        const filteredPenjualans = penjualans.filter(penjualan => {
            return jadwals.some(jadwal => {
                jadwal._id.equals(penjualan.idJadwal);
            });
        });
    
        const result = filteredPenjualans.map(penjualan => {
            const jadwal = jadwals.find(jadwal => jadwal._id.equals(penjualan.idJadwal));
            return {
                jadwalDetails: {
                    idKereta: jadwal.idKereta,
                    idStasiunAwal: jadwal.idStasiunAwal,
                    idStasiunAkhir: idStasiunAkhir,
                    tanggal: jadwal.tanggal,
                    jam: jadwal.jam
                },
                jumlahPenjualan
            };
        });
    
        res.json(result);
    } catch {
        res.json({msg: 'Penjualan tidak ditemukan!'});
    }
};

module.exports = {
    getPenjualan,
    getPenjualanByTujuan,
    getPenjualanByKeberangkatan,
    getPenjualanByTanggal
};