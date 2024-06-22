const adminMiddleware = (req, res, next) => {
    console.log('Admin middleware called');
    if (req.session.user && req.session.user.role === 'admin') {
        next();
    } else {
        console.log('Admin middleware: No active session or unauthorized');
        res.status(401).json({ msg: 'Unauthorized' });
    }
};

const userMiddleware = (req, res, next) => {
    console.log('User middleware called');
    if (req.session.user && req.session.user.role === 'user') {
        next();
    } else {
        console.log('User middleware: No active session or unauthorized');
        res.status(401).json({ msg: 'Unauthorized' });
    }
};

const getSession = (req, res) => {
    if (req.session.user) {
        res.json({ user: req.session.user });
    } else {
        res.status(401).json({ msg: 'No active session' });
    }
};

module.exports = {
    adminMiddleware,
    userMiddleware,
    getSession
};