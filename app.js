const express = require('express');
const app = express();
const routes = require('./routes/router');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs'); 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.listen(4000, () =>{
    console.log('server running on http://localhost:4000');
});