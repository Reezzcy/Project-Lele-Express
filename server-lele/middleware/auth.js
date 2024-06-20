const adminMiddleware = (req, res, next) => {
    if (req.session.user && req.session.user.role === 'admin') {
        next();
    } else {
        res.status(401).json({ msg: 'No active session' });
    }
};

const userMiddleware = (req, res, next) => {
    if (req.session.user && req.session.user.role === 'user') {
        next();
    } else {
        res.status(401).json({ msg: 'No active session' });
    }
};

const getSession = (req, res) => {
    if (req.session.user) {
        res.json({ user: req.session.user });
    } else {
        res.status(401).json({ msg: 'No active session' });
    }
};

const postSession = async (req, res, next) => {
    try {
        // console.log('Checking success session:', req.session);
        const { username, id, role } = req.session.user;
        req.session.user = {id, username, role};
        next();
    } catch {
        // console.log('Checking failed session:', req.session);
        next();
    }
};

module.exports= {
    adminMiddleware,
    userMiddleware,
    getSession,
    postSession
};