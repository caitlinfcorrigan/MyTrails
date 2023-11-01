module.exports = function(req, res, next) {
    // If isAuth() returns true, continue
    if ( req.isAuthenticated() ) return next();
    // Otherwise, direct them to login
    res.redirect('/auth/google');
}