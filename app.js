const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

//custom middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());


app.set('view engine', 'pug');

const mainRoutes = require("./routes");
const cardRoutes = require("./routes/cards");


app.use(mainRoutes);
app.use('/card', cardRoutes);
app.use('/static', express.static('public'));


app.use((req,res,next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

//custom middleware
app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    res.render('error', err);
})


app.listen(3000, ()=>{
    console.log('The application is running on localhost 3000');
});
