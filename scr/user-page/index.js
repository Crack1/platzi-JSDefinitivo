var page = require('page');
var header = require('../header');
var title = require('title');
var empty = require('empty-element');
var template = require('./template');


page('/:username', loadUser, header, (ctx, next) => {
    var main = document.getElementById('main-container');
    title(`Platzigram - ${ctx.params.username}`);
    empty(main).appendChild(template(ctx.user));
    // $('.modal-trigger').leanModal();
});

page('/:username/:id', loadUser, header, (ctx, next) => {
    var main = document.getElementById('main-container');
    title(`Platzigram - ${ctx.params.username}`);
    empty(main).appendChild(template(ctx.user));

    $(document).ready(function () {
        // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
        $(`#modal${ctx.params.id}`).leanModal({
            complete: function () {
                page(`/${ctx.params.username}`)
            }
        });

    });



});


async function loadUser(ctx, next) {
    try {
        ctx.user = await fetch(`/api/user/:${ctx.params.username}`).then(res => res.json());
        next();
    } catch (error) {
        console.log(error);
    }
}