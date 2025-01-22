const express = require('express');
const fs = require('fs');
const path = require('path');
const logger = require('./logger');
const app = express();
require('dotenv').config();

const home = require('./routes/home');
const progress = require('./routes/progress');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(home);
app.use(progress);

app.use((req, res) => {
    const language = req.query.lang || 'en';
    const languageFile = path.join(__dirname, 'languages', `${language}.json`);
        
    const languageData = JSON.parse(fs.readFileSync(languageFile, 'utf8'));

	res.render('404', { languageData });
});

app.listen(process.env.HTTP_PORT, () => {
    logger.info(`Website was started on http://localhost:${process.env.HTTP_PORT}`);
});