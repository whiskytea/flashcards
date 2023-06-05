const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/:id', (req, res) => {
    res.render('card', { 
        prompt: cards[req.params.id].question,
        hint: cards[req.params.id].hint
    });
});

module.exports = router;