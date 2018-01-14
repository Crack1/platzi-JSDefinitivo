var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var main = document.getElementById('main-container');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');
var webcam = require('webcamjs');
var picture = require('../picture-card');



page('/', header, asyncLoad, (ctx, next) => {
    title('Platzigram');
    var main = document.getElementById('main-container');
    empty(main).appendChild(template(ctx.pictures));

    const picturePreview = $("#picture-preview");
    const camaraInput = $("#camara-input");
    const cancelPicture = $("#cancelPicture");
    const shootButton = $("#shoot");
    const uploadButton = $("#uploadButton");

    function reset() {
        picturePreview.addClass('hide');
        cancelPicture.addClass('hide');
        uploadButton.addClass('hide');
        shootButton.removeClass('hide');
        camaraInput.removeClass('hide');
    }

    cancelPicture.click(reset);

    $('.modal-trigger').leanModal({
        ready: function () {
            webcam.set({
                width: 300,
                height: 240,
                dest_width: 640,
                dest_height: 480,
                image_format: 'jpeg',
                jpeg_quality: 90,
                force_flash: false
            });
            webcam.attach('#camara-input');
            shootButton.click((ev) => {
                webcam.snap((data_uri) => {
                    picturePreview.html(`<img src="${data_uri}"/>`);
                    picturePreview.removeClass('hide');
                    cancelPicture.removeClass('hide');
                    uploadButton.removeClass('hide');
                    shootButton.addClass('hide');
                    camaraInput.addClass('hide');
                    //el click se define cda vez que se toma foto se van agregando click con esto se resetea el evento para quitar los anteriores
                    uploadButton.off('click');
                    uploadButton.click(() => {
                        const pic = {
                            url: data_uri,
                            likes: 0,
                            lied: false,
                            createdAt: +new Date(),
                            user: {
                                username: 'Erwin Vides',
                                avatar: "https://www.ecured.cu/images/thumb/0/08/Squirtle1.png/260px-Squirtle1.png"
                            }
                        }
                        $("#picture-cards").prepend(picture(pic));
                        webcam.reset();
                        reset();
                        $("#modalCamara").closeModal();

                    });
                })
            });
        },
        complete: () => {
            webcam.reset();
            reset();
        }
    })
    //$('.modal-trigger').modal('open');




});

function loading(ctx, next) {
    var el = document.createElement('div');
    el.classList.add('loader');
    main.appendChild(el);
    next();

}


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