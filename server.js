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

app.get('/api/user/:username', (req, res) => {
    const user = {
        username: 'Erwin Vides',
        avatar: "https://www.ecured.cu/images/thumb/0/08/Squirtle1.png/260px-Squirtle1.png",
        pictures: [{
            id: 1,
            src: "https://cdn3.computerhoy.com/sites/computerhoy.com/files/editores/user-152/vegeta-dragon-ball-super-122.jpg",
            likes: 12
        }, {
            id: 2,
            src: "https://i1.wp.com/herosfact.com/wp-content/uploads/2017/12/Dragon-Ball-Super-122-Vegeta-vs-Jiren-e1514101532786.jpg?resize=510%2C299&ssl=1",
            likes: 45
        }, {
            id: 3,
            src: "https://dragonball.today/wp-content/uploads/sites/2/2018/01/hqdefault-282-480x300.jpg",
            likes: 12
        }]
    }

    res.send(user);
});

app.get('/:username', (req, res) => {
    res.render('index', {
        title: 'Platzigram Username'
    });
});


app.listen(3000, (err) => {
    if (err) {
        console.log("Error  al iniciar el server");
    }

    console.log("Server running in http://locahost:" + 3000);
});