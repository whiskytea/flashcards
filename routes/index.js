const express = require('express');
const router = express.Router();


router.get('/hello', (req,res)=>{
    const name = req.cookies['name'];
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
})

router.get('/', (req, res)=>{
    const name = req.cookies['name'];
    if (name) {
        res.render('index', {name});
    }else{
        res.redirect('/hello');
    }
})

router.post('/home', (req,res) =>{
    res.redirect('/');
})

router.post('/signOut', (req,res) =>{
    res.clearCookie('name');
    res.redirect('/hello');
})

router.post('/cards', (req,res)=>{
    res.redirect('/card');
})

router.post('/name', (req, res)=>{
    res.cookie('name', req.body.name);
    res.redirect('/');
})

router.post('/homepage', (req,res)=>{
    res.redirect('/');
})


module.exports = router;