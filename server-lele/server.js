const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();
require('./utils/db');

const server = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
};

server.use(cors(corsOptions));

server.use(cookieParser(process.env.SESSION_SECRET));
server.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: parseInt(process.env.COOKIE_MAX_AGE, 10) }
}));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(methodOverride('_method'));

server.use((req, res, next) => {
    // console.log('Current session:', req.session);
    next();
});

server.use(routes);

server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(port, () => {
    console.log(`Lele Express listening at http://localhost:${port}`);
});