const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const cors = require('cors');
const routes = require('./routes');

require('./utils/db');

const server = express();
const port = 3000;

server.use(cors());
// server.use(express.static(path.join(__dirname, '../lele-express/public')));

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use(methodOverride('_method'));

server.use(routes);

server.get('/', (req, res) => {
    res.send('Server jalan');
});

server.listen(port, () => {
    console.log(`Lele Express listening at http://localhost:${port}`);
});
