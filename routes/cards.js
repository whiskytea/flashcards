const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/:id', (req,res) => {
    const { side } = req.query;
    const { id } = req.params;
    const text = cards[id][side];
    const hint = cards[id].hint;
    const templateData = {text};
    if (side === 'question'){
        templateData.hint = hint;
        templateData.otherSide = 'answer'
        res.render('card', templateData);
    }else if(side === 'answer'){
        templateData.otherSide = 'question'
        res.render('card', templateData);
    }else{
        res.redirect(error);
    }


});

router.get('/', (req,res) =>{
    res.render('card', );
})

router.post('/answer', (req,res) => {
    const { id } = req.params;
    const url = '/card/' + id + '?side=answer';
    res.redirect(url);
});

router.post('/question', (req,res) => {
    const { id } = req.params;
    const url = '/card/' + id + '?side=question';
    res.redirect(url);
});

router.use((req,res,next) =>{
    console.log('we made it to the card router')
    next();
})

module.exports = router;