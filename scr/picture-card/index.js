var yo = require('yo-yo');
var moment = require('moment');

module.exports = function (pic) {
    var el;

    function render(picture) {
        return yo `    <div class="card ${picture.liked? 'liked' : ''}">
        <div class="card-image">
            <img class="activator" src="${picture.url}">
        </div>
        <div class="card-content">
            <a href="/${picture.user.username}" class="card-title">
                <img src="${picture.user.avatar}" class="avatar" />
                <span class="username">${picture.user.username}</span>
            </a>
            <small class="right time">${moment(picture.createdAt).fromNow()}</small>
            <p>
                <a class="left" href="#" onclick=${like.bind(null, true)}>
                    <i class="fa fa-heart-o heart-o" aria-hidden="true"></i>
                </a>
                <a class="left" href="#" onclick=${like.bind(null,false)}>
                <i class="fa fa-heart heart" aria-hidden="true"></i>
            </a>
                <span class="left likes">${picture.likes} me gusta </span>
            </p>
        </div>
        </div>`
    }

    function like(liked) {
        // if (dblclick) {
        //     pic.liked = !pic.liked;
        //     liked = pic.liked;
        // } else {
        //     pic.liked = liked;
        // }
        pic.liked = liked;
        pic.likes += liked ? 1 : -1;
        var newEl = render(pic);
        yo.update(el, newEl);
        return false;
    }
    el = render(pic);
    return el;

};