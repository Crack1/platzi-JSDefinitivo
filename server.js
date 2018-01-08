var express = require('express');
var multer = require('multer');
var ext = require('file-extension');


var app = express();


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.' + ext(file.originalname));
    }
})

var upload = multer({
    storage: storage
}).single('picture');



app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Platzigram'
    });
});
app.get('/signup', (req, res) => {
    res.render('index', {
        title: 'Platzigram Signup'
    });
});
app.get('/signin', (req, res) => {
    res.render('index', {
        title: 'Platzigram Signin'
    });
});

app.get('/api/pictures', (req, res) => {
    var pictures = [{
        user: {
            username: 'evides',
            avatar: 'https://www.ecured.cu/images/thumb/0/08/Squirtle1.png/260px-Squirtle1.png'
        },
        url: 'img/office.jpg',
        likes: 1024,
        liked: true,
        createdAt: new Date()
    }, {
        user: {
            username: 'evides',
            avatar: 'https://www.ecured.cu/images/thumb/0/08/Squirtle1.png/260px-Squirtle1.png'
        },
        url: 'img/office.jpg',
        likes: 1024,
        liked: false,
        createdAt: new Date().setDate(new Date().getDate() - 10)
    }];

    res.send(pictures);

});

app.post('/api/pictures', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.send(500, "Error uploading file");
        }
        res.send("File Uploaded");
    })
});


app.listen(3000, (err) => {
    if (err) {
        console.log("Error  al iniciar el server");
    }

    console.log("Server running in http://locahost:" + 3000);
});