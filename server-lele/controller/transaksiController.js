const Jadwal = require('../model/jadwal');
const Tiket = require('../model/tiketModel');

const postTiket = (req) => {
    Tiket.insertOne(req.body);
};

const getJadwalTiket = async (req) => {
    return await Tiket.find({ idJadwal: req.body.idJadwal });
};

const getTiketByUser = async (req) => {
    const tiketTrue = await Tiket.find({ nama: req.body.nama, status: true });
    const tiketFalse = await Tiket.find({ nama: req.body.nama, status: false });

    const result = [...tiketTrue];
    result.push(...tiketFalse);

    return result;
};

const getTiketByTujuan = async (req) => {
    const tikets = await getTiketByUser(req.body);
    const filteredTikets = tikets.filter((tiket) => tiket.idStasiunAkhir === req.body.idStasiunAkhir);

    return filteredTikets
};

const getTiketByKeberangkatan = async (req) => {
    const tikets = await getTiketByUser(req.body);
    const filteredTikets = tikets.filter((tiket) => tiket.idStasiunAwal === req.body.idStasiunAwal);

    return filteredTikets
};

const getTiketByTanggal = async (req) => {
    // const tikets = await getTiketByUser(req.body);
    // const jadwals = await Jadwal.find({ tanggal: req.body.tanggal });

    const tikets = await Tiket.find().populate('idJadwal');
    const jadwals = await Jadwal.find();

    // const filteredTikets = tikets.filter((tiket) => tiket.idJadwal in jadwals._id)

    // return filteredTikets

    const result = tikets.map(tiket => {
        const jadwalExists = jadwals.some(jadwal => jadwal._id.equals(tiket.idJadwal));
        return {
            ...tiket.toObject(),
            jadwalExists
        };
    });

    return result;
};

const getDetailTiket = (req) => {
    return Tiket.find({ _id: req.body._id });
};
