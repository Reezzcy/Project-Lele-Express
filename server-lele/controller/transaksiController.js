const Jadwal = require('../model/jadwal');
const Tiket = require('../model/tiketModel');

const postTiket = (req, res) => {
    try {
        Tiket.insertOne(req.body);
        res.json({msg: 'Berhasil input tiket!'});
    } catch {
        res.json({msg: 'Gagal input tiket!'});
    }
};

const getTiketByUser = async (req, res) => {
    try {
        const tiketTrue = await Tiket.find({ nama: req.body.nama, status: true });
        const tiketFalse = await Tiket.find({ nama: req.body.nama, status: false });
        
        const result = [...tiketFalse];
        result.push(...tiketTrue);
        
        res.json(result);
    } catch {
        res.json({msg: 'Tiket tidak ditemukan!'});
    }
};

const getTiketByJadwal = async (req, res) => {
    try {
        const tiket = await Tiket.find({ idJadwal: req.body.idJadwal });
        res.json(tiket);
    } catch {
        res.json({msg: 'Tiket tidak ditemukan!'});
    }
};
    
const getTiketByTujuan = async (req, res) => {
    try {
        const tikets = await getTiketByUser(req);
        const filteredTikets = tikets.filter((tiket) => tiket.idStasiunAkhir === req.body.idStasiunAkhir);
        
        res.json(filteredTikets);
    } catch {
        res.json({msg: 'Tiket tidak ditemukan!'});
    }
};

const getTiketByKeberangkatan = async (req, res) => {
    try {
        const tikets = await getTiketByUser(req);
        const filteredTikets = tikets.filter((tiket) => tiket.idStasiunAwal === req.body.idStasiunAwal);
    
        res.json(filteredTikets);
    } catch {
        res.json({msg: 'Tiket tidak ditemukan!'});
    }
};

const getTiketByTanggal = async (req, res) => {
    try {
        const jadwals = await Jadwal.find({ tanggal: req.body.tanggal });
        const userTikets = await getTiketByUser(req);
    
        const filteredTikets = userTikets.filter(tiket => {
            return jadwals.some(jadwal => {
                jadwal._id.equals(tiket.idJadwal);
            });
        });
    
        const result = filteredTikets.map(tiket => {
            const jadwal = jadwals.find(jadwal => jadwal._id.equals(tiket.idJadwal));
            return {
                idJadwal: tiket.idJadwal,
                nama: tiket.nama,
                status: tiket.status,
                noBangku: tiket.noBangku,
                jadwalDetails: {
                    idKereta: jadwal.idKereta,
                    idStasiunAwal: jadwal.idStasiunAwal,
                    idStasiunAkhir: idStasiunAkhir,
                    tanggal: jadwal.tanggal,
                    jam: jadwal.jam
                }
            };
        });
    
        res.json(result);
    } catch {
        res.json({msg: 'Tiket tidak ditemukan!'});
    }
};

const getDetailTiket = async (req, res) => {
    try {
        const tiket = await Tiket.find({ _id: req.body._id });
        res.json(tiket)
    } catch {
        res.json({msg: 'Detail tidak ditemukan!!'});
    }
};

module.exports = {
    postTiket,
    getTiketByJadwal,
    getTiketByTujuan,
    getTiketByKeberangkatan,
    getTiketByTanggal,
    getDetailTiket
};