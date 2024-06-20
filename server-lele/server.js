const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const routes = require('./routes');
const { postSession } = require('./middleware/auth');

require('./utils/db');

const server = express();
const port = 3000;

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

server.use(cors(corsOptions));

server.use(cookieParser('secret'));
server.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 }
}));

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use(methodOverride('_method'));

server.use(postSession);

server.use(routes);

server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(port, () => {
    console.log(`Lele Express listening at http://localhost:${port}`);
});