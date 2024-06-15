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

module.exports= {
    adminMiddleware,
    userMiddleware,
};