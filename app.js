const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static('css'));

//custom middleware


app.set('view engine', 'pug');

const mainRoutes = require("./routes");
const cardRoutes = require("./routes/cards");


app.use(mainRoutes);
app.use('/card', cardRoutes);

app.use((req,res,next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

//custom middleware
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
})

app.listen(3000, ()=>{
    console.log('The application is running on localhost 3000');
});
