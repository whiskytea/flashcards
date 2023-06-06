const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/:id', (req,res) => {
    res.render('card', {
        prompt: cards[req.params.id].question,
        hint: cards[req.params.id].hint
    })
});


router.use((req,res,next) =>{
    console.log('we made it to the card router')
    next();
})

module.exports = router;