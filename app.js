const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Home');

});

app.get('/contact', (req, res) =>{
    res.send('Contáctanos');

});

app.get('/products', (req, res) =>{
    res.send('Productos');

});

app.get('/abc123', (req, res) =>{
    res.send('Producto Abc123');

});

app.listen(port, () =>{
    console.log(`Server Listening on http://localhost:${port}`);

})