var page = require('page');
var title = require('title');
var main = document.getElementById('main-container');

page('/', (ctx, next) => {

    title('Platzigram');
    main.innerHTML = '<a href="/signup">Signup</a>';
});