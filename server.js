var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/signup', (req, res) => {
    res.render('index');
});
app.get('/signin', (req, res) => {
    res.render('index');
});


app.listen(3000, (err) => {
    if (err) {
        console.log("Error  al iniciar el server");
    }
    console.log("Server running in http://locahost:" + 3000);
});