const Jadwal = require('../model/jadwal');
const Tiket = require('../model/tiketModel');

const postTiket = async (req, res) => {
    try {
        await Tiket.insertMany(req.body);
        res.json({ msg: 'Berhasil input tiket!' });
    } catch (error) {
        res.status(500).json({ msg: 'Gagal input tiket!', error });
    }
};

const getTiketByUser = async (req, res) => {
    try {
        const { nama } = req.body;
        const tiketTrue = await Tiket.find({ nama, status: true });
        const tiketFalse = await Tiket.find({ nama, status: false });

        const result = [...tiketTrue, ...tiketFalse];
        
        return result;
    } catch (error) {
        res.status(500).json({ msg: 'Tiket tidak ditemukan!', error });
    }
};

const getTiketByJadwal = async (req, res) => {
    try {
        const tiket = await Tiket.find({ idJadwal: req.body.idJadwal });
        res.json(tiket);
    } catch (error) {
        res.status(500).json({ msg: 'Tiket tidak ditemukan!', error });
    }
};

const getTiketByTujuan = async (req, res) => {
    try {
        const tikets = await getTiketByUser(req);
        const filteredTikets = tikets.filter((tiket) => tiket.idStasiunAkhir === req.body.idStasiunAkhir);
        
        res.json(filteredTikets);
    } catch (error) {
        res.status(500).json({ msg: 'Tiket tidak ditemukan!', error });
    }
};

const getTiketByKeberangkatan = async (req, res) => {
    try {
        const tikets = await getTiketByUser(req);
        const filteredTikets = tikets.filter((tiket) => tiket.idStasiunAwal === req.body.idStasiunAwal);
    
        res.json(filteredTikets);
    } catch (error) {
        res.status(500).json({ msg: 'Tiket tidak ditemukan!', error });
    }
};

const getTiketByTanggal = async (req, res) => {
    try {
        const jadwals = await Jadwal.find({ tanggal: req.body.tanggal });
        const userTikets = await getTiketByUser(req);
    
        const filteredTikets = userTikets.filter(tiket => {
            return jadwals.some(jadwal => jadwal._id.equals(tiket.idJadwal));
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
                    idStasiunAkhir: jadwal.idStasiunAkhir,
                    tanggal: jadwal.tanggal,
                    jam: jadwal.jam
                }
            };
        });
    
        res.json(result);
    } catch (error) {
        res.status(500).json({ msg: 'Tiket tidak ditemukan!', error });
    }
};

const getDetailTiket = async (req, res) => {
    try {
        const tiket = await Tiket.findById(req.body._id);
        res.json(tiket);
    } catch (error) {
        res.status(500).json({ msg: 'Detail tidak ditemukan!', error });
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
