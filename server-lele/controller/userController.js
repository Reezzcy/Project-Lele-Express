const User = require('../model/userModel');

const postUser = async (req, res) => {
    try {
        await User.insertMany(req.body);
        res.json({ msg: 'Berhasil input user!' });
    } catch (error) {
        res.status(500).json({ msg: 'Gagal input user!', error });
    }
};

const getUserId = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.session.user.id });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ msg: 'Akun tidak ditemukan' });
        }
    } catch (error) {
        res.status(500).json({ msg: 'Akun tidak ditemukan', error });
    }
};

const postUserLogin = async (req, res) => {
    try {
        const { nama, email, password } = req.body;
        const account = await User.findOne({ nama, email });

        if (account && account.password === password) {
            req.session.user = {
                id: account._id,
                username: account.nama,
                role: email.includes('@admin.lele.com') ? 'admin' : 'user'
            };

            res.json({ msg: 'Login successful' });
        } else {
            res.status(401).json({ msg: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ msg: 'Tidak dapat login!', error });
    }
};

const putEditUser = async (req, res) => {
    try {
        console.log(req.body);
        await User.updateOne(
            { _id: req.body._id },
            {
                $set: {
                    nama: req.body.nama,
                    email: req.body.email,
                    password: req.body.password
                }
            }
        );
        res.json({ msg: 'Akun berhasil diupdate' });
        console.log(req.body);
    } catch (error) {
        res.status(500).json({ msg: 'Akun gagal diupdate', error });
    }
};

module.exports = {
    postUser,
    getUserId,
    postUserLogin,
    putEditUser
};