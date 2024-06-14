const User = require('../model/userModel');

const postUser = (req) => {
    User.inserOne(req.body);
};

const getUserId = async (id) => {
    const user = await User.findOne({ _id: id });

    return user
};

const getUserLogin = async (id, password) => {
    const user = await User.findOne({ _id: id });
    return user.password !== password? flase : true
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
