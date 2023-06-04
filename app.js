const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('imgs'));

app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/hello', (req, res)=>{
    res.render('hello');
})

app.post('/hello', (req, res)=>{
    res.render('hello', {name: req.body.search});
})

app.get('/card', (req, res)=>{
    res.render('card', {prompt: "Who is buried in Grant's tomb?"});
})

app.listen(3000, ()=>{
    console.log('The application is running on localhost 3000');
});
