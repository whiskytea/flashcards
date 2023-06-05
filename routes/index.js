const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

router.use(bodyParser.urlencoded({extended: false}))
router.use(cookieParser());

router.get('/hello', (req,res)=>{
    res.render('hello');
})

router.post('/submit', (req, res)=>{
    res.cookie('name', req.body);
    res.redirect('/');
})

router.get('/', (req, res)=>{
    const name = req.cookies['name'];
    if (name) {
        res.render('/', {name});
    }else{
        res.redirect('hello');
    }
})

router.post('/signout', (req,res) =>{
    res.clearCookie('name');
    res.redirect('hello');
})


module.exports = router;