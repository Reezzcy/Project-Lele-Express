const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const routes = require('./routes');

require('./utils/db');

const server = express();
const port = 3000;

// server.use(express.static(path.join(__dirname, '../lele-express/public')));
// server.use(express.urlencoded({extended: true}));

// server.use(methodOverride('_method'));

// server.use('/api', routes);

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../lele-express/index.html'));
});

server.listen(port, () => {
    console.log(`Lele Express listening at http://localhost:${port}`);
});
