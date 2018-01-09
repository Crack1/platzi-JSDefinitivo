var page = require('page');
var header = require('../header');
var title = require('title');
var empty = require('empty-element');
var template = require('./template');


page('/:username', header, loadUser, (ctx, next) => {
    var main = document.getElementById('main-container');
    title(`Platzigram - ${ctx.params.username}`);
    empty(main).appendChild(template(ctx.user));
});

async function loadUser(ctx, next) {
    try {
        ctx.user = await fetch(`/api/user/:${ctx.params.username}`).then(res => res.json());
        next();
    } catch (error) {
        console.log(error);
    }
}