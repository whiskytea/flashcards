const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

router.use(bodyParser.urlencoded({extended: false}))
router.use(cookieParser());

router.get('/', (req, res)=>{
    res.render('index');
})

router.get('/hello', (req,res)=>{
    res.render('hello');
})

router.post('/homepage', (req,res)=>{
    res.redirect('/');
})

router.post('/submit', (req, res)=>{
    res.cookie('searchResults', req.body.search);
    res.redirect('card');
})

router.get('/card', (req, res)=>{
    const searchResults = req.cookies['searchResults'];
    if (searchResults) {
        res.render('card', {searchResults});
    }else{
        res.redirect('hello');
    }
})

router.post('/reset', (req,res) =>{
    res.clearCookie('searchResults');
    res.redirect('hello');
})


module.exports = router;