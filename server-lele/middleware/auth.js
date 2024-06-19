const adminMiddleware = (req, res, next) => {
    if (req.session.user && req.session.user.role === 'admin') {
        next();
    } else {
        res.redirect('/login');
    }
};

const userMiddleware = (req, res, next) => {
    if (req.session.user && req.session.user.role === 'user') {
        next();
    } else {
        res.redirect('/login');
    }
};

const getSession = (req, res) => {
    if (req.session.user) {
        res.json({ user: req.session.user });
    } else {
        res.status(401).json({ msg: 'No active session' });
    }
};

module.exports= {
    adminMiddleware,
    userMiddleware,
    getSession
};
