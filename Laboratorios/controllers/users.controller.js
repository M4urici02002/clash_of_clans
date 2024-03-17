exports.get_login = (request, response, next) => {
    // Renderiza la vista de login, pasando el nombre de usuario si existe en la sesión
    response.render('login', {
        username: request.session.username || '',
        errorMessage: '' 
    });
};

exports.post_login = (request, response, next) => {
    // Almacena el nombre de usuario en la sesión tras el login y redirecciona a la página principal
    request.session.username = request.body.username;
    response.redirect('/');
};

exports.get_logout = (request, response, next) => {
    // Destruye la sesión y redirecciona al login
    request.session.destroy(() => {
        response.redirect('/users/login'); // Este código se ejecuta cuando la sesión se elimina.
    });
};
