const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
    res.send('Hello, User');
    console.log(req.params, req.qeury)
});

module.exports = router;