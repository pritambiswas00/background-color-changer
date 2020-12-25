const express = require('express');
const app = express();
const port = process.env.PORT || 4000

const path = require('path');

const staticPath = path.join(__dirname, './');

console.log( path.join(__dirname, './'))

app.use(express.static(staticPath));

app.get('', (req, res)=>{
    res.send('index.html');
})

app.listen(port, ()=>{
    console.log('Server is up'+port);
})

