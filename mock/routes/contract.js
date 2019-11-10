const express = require('express');
const router = express.Router();


router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        if (global.mockData.id === id) {
            return res.json({
                name: global.mockData.name,
            });
        }
        res.json({message: 'contract not found!'});
    } catch (e) {
        res.status(500);
        res.json({errors: [{msg: 'Server error'}]});
    }
});


module.exports = router;

