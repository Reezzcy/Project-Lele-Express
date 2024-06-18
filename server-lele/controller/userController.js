const User = require('../model/userModel');

const postUser = (req, res) => {
    try {
        User.inserOne(req.body);
        res.json({msg: 'Berhasil input user!'});
    } catch {
        res.json({msg: 'Gagal input user!'});
    }
};

const getUserId = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.session.user.id });
        res.json(user);
    } catch {
        res.json({msg: 'Akun tidak ditemukan'});
    }
};

const postUserLogin = async (req, res) => {
    try {
        const { nama, email, password } = req.body;
        const account = User.findOne({ nama, email});
    
        if (nama === account.nama && email === account.email && password === account.password) {
            if (nama.includes('@admin.lele.com')){
                req.session.user = {
                    id: account._id,
                    username: account.nama,
                    role: 'admin'
                };
                res.redirect('/admin');
            } else {
                req.session.user = {
                    id: account._id,
                    username: account.nama,
                    role: 'user'
                };
                res.redirect('/user');
            }
        } else {
            res.send('Invalid credentials');
        }
    } catch {
        res.json({msg: 'Tidak dapat login!'});
    }
};

const putEditUser = (req, res) => {
    try {
        User.updateOne(
            { _id: req.session.user._id },
            {
                $set: {
                    nama: req.body.nama,
                    email: req.body.email,
                    password: req.body.password
                }
            }
        );
        res.json({msg: 'Akun gagal diupdate'});
    } catch {
        res.json({msg: 'Akun berhasil diupdate'});

    }
};

module.exports = {
    postUser,
    getUserId,
    postUserLogin,
    putEditUser
};