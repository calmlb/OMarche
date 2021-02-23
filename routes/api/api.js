const express = require('express');
const router = express.Router();


router.get('/vendors', function(req,res) {
    res.json({
        vendors: []
    })
})

module.exports = router;
