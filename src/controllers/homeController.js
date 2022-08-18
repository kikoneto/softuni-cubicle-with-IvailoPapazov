const router = require('express').Router();

const cubes = require('../db.json');

router.get('/', (req, res) => {
    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.post('/ivan', (req, res) => {
    res.send('Successfully sent information');
    console.log(req.body);
})

module.exports = router;