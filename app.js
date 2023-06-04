const express = require('express');

const app = express();
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

app.listen(3000, ()=>{
    console.log('The application is running on localhost 3000');
});
