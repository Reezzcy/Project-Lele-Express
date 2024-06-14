const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const routes = require('./routes');

require('./utils/db');

const server = express();
const port = 3000;

server.use(express.static('public'));
server.use(express.urlencoded({extended: true}));

server.use(methodOverride('_method'));

server.use(cookieParser('secret'));
server.use(session({
    cookie: {maxAge : 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));
server.use(flash());

app.use('', routes);

server.listen(port, () => {
    console.log(`Lele Express listening at http://localhost:${port}`);
});
