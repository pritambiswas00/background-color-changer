const express = require('express');
const app = express();

const path = require('path');

const staticPath = path.join(__dirname, './');

console.log( path.join(__dirname, './'))

app.use(express.static(staticPath));

app.get('', (req, res)=>{
    res.send('index.html');
})

app.listen(4000, ()=>{
    console.log('Server is up 4000');
})

