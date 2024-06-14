const Jadwal = require('../model/jadwal');
const Penjualan = require('../model/penjualan');

const getPenjualan = () => {
    return Penjualan.find();
};

const getPenjualanByTujuan = async (req) => {
    const jadwals = await Jadwal.find({ _id: req.body.idJadwal });
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

    return result;
};

module.exports = {
    getPenjualan,
    getPenjualanByTujuan,
    
};