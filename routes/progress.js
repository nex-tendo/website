const express = require('express');
const router = express.Router();

router.get('/progress', async (req, res) => {
    res.render('progress');
});

module.exports = router;