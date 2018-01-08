var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var main = document.getElementById('main-container');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');




page('/', header, asyncLoad, (ctx, next) => {
    title('Platzigram');

    empty(main).appendChild(template(ctx.pictures));

});


function loadPictures(ctx, next) {
    request
        .get('/api/pictures')
        .end((err, res) => {
            if (err) return console.log(err);
            ctx.pictures = res.body;
            next();
        });

};

function loadPicturesAxios(ctx, next) {
    axios.get('/api/pictures')
        .then((res) => {
            //we can nest axios and we an use all the then 
            ctx.pictures = res.data;
            next();
        }).catch((err) => {
            console.log(err);
        });
}

function loadPicturesFetch(ctx, next) {
    fetch.get('/api/pictures')
        .then((res) => {
            //we can nest axios and we an use all the then 
            ctx.pictures = res.data;
            next();
        }).catch((err) => {
            console.log(err);
        });
}

async function asyncLoad(ctx, next) {
    try {
        ctx.pictures = await fetch('/api/pictures').then(res => res.json());
        next();
    } catch (error) {
        return console.log(error);
    }
}