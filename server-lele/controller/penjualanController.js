const Jadwal = require('../model/jadwal');
const Penjualan = require('../model/penjualan');

const hitungDokumenPerIdJadwal = async (req, res) => {
    try {
        const hasil = await Penjualan.aggregate([
            {
                $group: {
                    _id: "$idJadwal", // Mengelompokkan berdasarkan idJadwal
                    count: { $sum: 1 } // Menghitung jumlah dokumen dalam setiap grup
                }
            },
            {
                $project: {
                    _id: 0, // Menghilangkan field _id dari hasil akhir
                    idJadwal: "$_id", // Menambahkan field idJadwal dengan nilai dari _id grup sebelumnya
                    count: 1 // Menyertakan field count dalam hasil akhir
                }
            }
        ]);

        res.json(hasil); // Mengirimkan hasil dalam format JSON
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan.", error: error.message });
    }
};

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