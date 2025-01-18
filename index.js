const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const home = require('./routes/home');
const progress = require('./routes/progress')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(home);
app.use(progress);

app.use((req, res) => {
	res.render('404');
});

app.listen(process.env.HTTP_PORT, () => {
    console.log(`Website was started on http://localhost:${process.env.HTTP_PORT}`);
});