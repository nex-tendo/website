const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/progress', async (req, res) => {
    const language = req.query.lang || 'en';
    const languageFile = path.join(__dirname, '..', 'languages', `${language}.json`);
    
    const languageData = JSON.parse(fs.readFileSync(languageFile, 'utf8'));

    res.render('progress', { languageData });
});

module.exports = router;