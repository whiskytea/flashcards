const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/:id', (req,res) => {
    const { side } = req.query; //what side are we on?
    const { id } = req.params; //what card is this?
    const name = req.cookies.name;
    if(side.toLowerCase() !== 'question' && side.toLowerCase() !== 'answer'){ //what to load when there is no query string, or the query string is wrong
        res.redirect(`/card/${id}?side=question`);
    }else{

        const text = cards[id][side]; //get the card info
        const hint = cards[id].hint;
        const templateData = {text, id, name};
        if (side.toLowerCase() === 'question'){ //load the question
            templateData.hint = hint;
            templateData.displaySide = side.toUpperCase();
            templateData.otherSide = 'answer'
            res.render('card-front', templateData);
        }else{ //load the answer
            templateData.displaySide = side.toUpperCase();
            templateData.otherSide = 'question'
            res.render('card-front', templateData);
        }
    }
});

router.get('/', (req,res) =>{
    const { id } = req.query;
    const currentCard = parseInt(id); //converts the id into an int for comparison later
    const cardNum = cards.length; //this code block gets a random card id
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    if (!id){
        //if we're coming from the home page, load a random card
        const url = `/card/${getRandomInt(cardNum)}?side=question`;
        res.redirect(url);
    }else{
        //if the user is clicking the "get a new card" button, make sure we don't repeat
        let newCard;
        do{
            newCard = getRandomInt(cardNum);
        }while(newCard === currentCard)
        const url = `/card/${newCard}?side=question`;
        res.redirect(url);
    }


})


module.exports = router;