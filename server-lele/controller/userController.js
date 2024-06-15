const User = require('../model/userModel');

const postUser = (req) => {
    User.inserOne(req.body);
};

const getUserId = async (req) => {
    const user = await User.findOne({ _id: req.params.id });

    return user
};

const postUserLogin = async (req) => {
    const { nama, email, password } = req.body;
    const account = User.findOne({ nama, email});

    if (nama === account.nama && account.email && password === account.password) {
        if (nama.includes('@admin.lele.com')){
            req.session.user = {
                username: 'admin',
                role: 'admin'
            };
            res.redirect('/admin');
        } else {
            req.session.user = {
                username: 'user',
                role: 'user'
            };
            res.redirect('/user');
        }
    } else {
        res.send('Invalid credentials');
    }
};

const putEditUser = (req) => {
    User.updateOne(
        { _id: req.body._id },
        {
            $set: {
                nama: req.body.nama,
                email: req.body.email,
                password: req.body.password
            }
        }
    );
};

module.exports = {
    postUser,
    getUserId,
    postUserLogin,
    putEditUser
};