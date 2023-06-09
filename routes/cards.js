const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/:id', (req,res) => {
    const { side } = req.query;

    if(side.toLowerCase() !== 'question' && side.toLowerCase() !== 'answer' ){
        res.redirect('../error');
    }else{
        const { id } = req.params;
        const text = cards[id][side];
        const hint = cards[id].hint;
        const templateData = {text, id};
        if (side.toLowerCase() === 'question'){
            templateData.hint = hint;
            templateData.displaySide = side.toUpperCase();
            templateData.otherSide = 'answer'
            res.render('card', templateData);
        }else{
            templateData.displaySide = side.toUpperCase();
            templateData.otherSide = 'question'
            res.render('card', templateData);
        }
    }
});

router.get('/', (req,res) =>{
    const cardNum = cards.length();
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const url = `/${getRandomInt(cardNum)}?side=question`;
    res.redirect(url);
})

router.use((req,res,next) =>{
    console.log('we made it to the card router')
    next();
})


module.exports = router;