const Jadwal = require('../model/jadwal');
const Tiket = require('../model/tiketModel');

const postTiket = (req) => {
    Tiket.insertOne(req.body);
};

const getTiketByUser = async (req) => {
    const tiketTrue = await Tiket.find({ nama: req.body.nama, status: true });
    const tiketFalse = await Tiket.find({ nama: req.body.nama, status: false });
    
    const result = [...tiketFalse];
    result.push(...tiketTrue);
    
    return result;
    };

const getTiketByJadwal = async (req) => {
    return await Tiket.find({ idJadwal: req.body.idJadwal });
};
    
const getTiketByTujuan = async (req) => {
    const tikets = await getTiketByUser(req);
    const filteredTikets = tikets.filter((tiket) => tiket.idStasiunAkhir === req.body.idStasiunAkhir);
    
    return filteredTikets
};

const getTiketByKeberangkatan = async (req) => {
    const tikets = await getTiketByUser(req);
    const filteredTikets = tikets.filter((tiket) => tiket.idStasiunAwal === req.body.idStasiunAwal);

    return filteredTikets
};

const getTiketByTanggal = async (req) => {
    // jadwal tanggal
    const jadwals = await Jadwal.find({ tanggal: req.body.tanggal });
    //tiket pengguna
    const userTikets = await getTiketByUser(req);

    // true kalo idJadwal di tiket sama dengan _id di jadwal
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

    return result;
};

const getDetailTiket = (req) => {
    return Tiket.find({ _id: req.body._id });
};

module.exports = {
    postTiket,
    getTiketByJadwal,
    getTiketByTujuan,
    getTiketByKeberangkatan,
    getTiketByTanggal,
    getDetailTiket
};