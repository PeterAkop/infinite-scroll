const express = require('express');
const router = express.Router();


router.get('/:id/?', async (req, res, next) => {
    const id = req.params.id;
    const {page, from, to} = req.query;
    try {
        if (global.mockData.id === id && page) {
            const neededPage = global.mockData.data
                .filter((p) => p.id === page);
            return res.json({
                paragraphs: neededPage[0].paragraphs.filter((par) => par.id >= parseInt(from) && par.id <= parseInt(to)),
            });
        }
        res.json({message: 'contract not found!'});
    } catch (e) {
        res.status(500);
        res.json({errors: [{msg: 'Server error'}]});
    }
});


module.exports = router;

