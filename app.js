const express = require('express');

const app = express();
app.get('/', (req, res)=>{
    res.send('testing');
})

app.get('/hello', (req, res)=>{
    res.send('testing the hello page');
})

app.listen(3000, ()=>{
    console.log('The application is running on localhost 3000');
});
