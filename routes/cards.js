const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/:id', (req,res) => {
    // const { side } = req.query;
    // console.log(side);
    const { id } = req.params;
    const text = cards[id].question;
    const hint = cards[id].hint;
    const templateData = {text, hint};
    res.render('card', templateData)
});

router.get('/', (req,res) =>{
    res.render('card', );
})

router.use((req,res,next) =>{
    console.log('we made it to the card router')
    next();
})

module.exports = router;