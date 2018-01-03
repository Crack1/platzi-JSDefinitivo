var page = require('page');
var main = document.getElementById('main-container');
var yo = require('yo-yo');
var empty = require('empty-element');

var main = document.getElementById('main-container');

page('/', (ctx, next) => {
    main.innerHTML = '<a href="/signup"> Go to Signup </a>';
});


page('/signup', (ctx, next) => {

    var el = yo `<div id="container">
    <div class="row">
        <div class="col s10 push-s1">
            <div class="row">
                <div class="col m5 hide-on-small-only">
                    <img src="./img/ajin.png" class="iphone" alt="">
                </div>
                <div class="col s12 m7">
                    <div class="row">
                        <div class="signup-box">
                            <h1 class="platzigram">Platzigram</h1>
                            <form action="" class="signup-form">
                                <h2>Registrate para ver las fotos de tus amigos</h2>
                                <div class="section">
                                    <a class="btn btn-fb hiden-on-small-only">
                                        Iniciar Session desde Facebook
                                    </a>
                                    <a class="btn btn-fb hiden-on-med-and-up">
                                        Iniciar Sesion
                                    </a>
                                </div>
                                <div class="divider"></div>
                                <div class="section">
                                    <input type="email" name="email" placeholder="Correo electronico">
                                    <input type="text" name="name" placeholder="Nombre completo">
                                    <input type="text" name="username" placeholder="Nombre de usuario">
                                    <input type="password" name="password" placeholder="Contrasena">
                                    <button class="btn waves-effect waves-light btn-signup" type="submit">Registrate</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row">
                        <div class="login-box">Tienes una cuenta?
                            <a href="/signin">Entrar</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>`;
    empty(main).appendChild(el);

});

page();