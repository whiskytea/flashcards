const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/hello', (req,res)=>{
    res.render('hello');
})

router.get('/', (req,res) => {
    res.render('card', {
        prompt: cards[0].question,
        hint: cards[0].hint
    })
});


router.post('/hello', (req, res)=>{
    res.cookie('searchResults', req.body.search);
    res.redirect('/:id');
})

router.use((req,res,next) =>{
    console.log('we made it to the card router')
    next();
})

module.exports = router;