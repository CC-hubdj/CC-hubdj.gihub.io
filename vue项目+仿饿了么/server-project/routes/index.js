module.exports = router;
var express = require('express');
var router = express.Router();
const {
    find,
    insert
} = require('../db/db');
/* GET home page. */
router.get('/entries', async function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let data = await find('elm1');
    res.json(data);
});

router.get('/restaurants', async function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let data = await find('elm2');
    res.json(data);
});

router.get('/recommends', async function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let data = await find('recommend');
    res.json(data);
});

router.get('/menus', async function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let data = await find('menu');
    res.json(data);
});

router.get('/recoverBody', async function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    let data = await find('recoverBody');
    res.json(data);
});

router.post('/register', async function (req, res, next) {
    res.append("Access-Control-Allow-Origin", "*");
    let data1 = req.body;
    let data = await find('register', {username:data1.username});
    console.log(req.body)
    if (data.length) {
        res.send('true');
    } else {
        res.send('false');
        await insert('register', [{
            ...req.body
        }])
    }
    // res.json(data);

});
module.exports = router;