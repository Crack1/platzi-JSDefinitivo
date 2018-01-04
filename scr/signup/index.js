var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var main = document.getElementById('main-container');
var title = require('title');

page('/signup', (ctx, next) => {
    title('Platzigram - Signup');
    empty(main).appendChild(template);

});