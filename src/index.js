const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db');

// VARIABLES
const PORT = 8080;

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// CONFIG
app.set('port', PORT);

// ROUTES
app.use('/news', require('./routes/news-routes'));
app.use('/categories', require('./routes/category-routes'));

app.listen(app.get('port'), () => {
    console.log(`WS listen on port ${app.get('port')}`);
});


