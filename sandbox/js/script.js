const https = require('https');

function getWord(word){

    const dict = https.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=a71734f4-6843-45b0-aabe-a4bdad55dcf5`, (res) => {
        let body = '';
        res.on('data', (data)=>{
            body += data;
        })
        res.on('end', () =>{
            let dictParse = JSON.parse(body);
            for (let i=0; i<dictParse.length; i++){
                displayDefinitions(word,dictParse[i]);
            }
        })
    })
}

function displayDefinitions(word, def){
    console.log(`${word}: a ${def.fl} --- ${def.shortdef[0]}`)
}

const word = 'cat';
getWord(word);
