var yo = require('yo-yo');
var landing = require('../landing');

var signInForm = yo `<div class="col s12 m7">
<div class="row">
    <div class="signup-box">
        <form action="" class="signup-form">
            <h2>Registrate para ver las fotos de tus amigos</h2>
            <div class="section">
                <a class="btn btn-fb hiden-on-small-only">
                    Iniciar Session desde Facebook
                </a>
                <a class="btn btn-fb hiden-on-med-and-up">
                <i class="fa fa-facebook-official"></i>Iniciar Sesion
                </a>
            </div>
            <div class="divider"></div>
            <div class="section">
                <input type="text" name="username" placeholder="Nombre de usuario">
                <input type="password" name="password" placeholder="Contrasena">
                <button class="btn waves-effect waves-light btn-signup" type="submit">Inicia Sesion</button>
            </div>
        </form>
    </div>
</div>
<div class="row">
    <div class="login-box">No tienes una cuenta?
        <a href="/signup">Registrate</a>
    </div>
</div>
</div>`;

module.exports = landing(signInForm);