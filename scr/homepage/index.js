var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var main = document.getElementById('main-container');
var title = require('title');

page('/', (ctx, next) => {
    title('Platzigram');
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
    empty(main).appendChild(template(pictures));

});