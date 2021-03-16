import { Router } from 'express';
var router = Router();
var protect = function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send("<h2>Forbidden.</h2>");
};
router;
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'h@h.com' && password === 'p') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('<h1>Wrong credentials.</h1>');
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n        <div>\n            <h1>You're logged in.</h1>\n            <a href=\"/logout\">Logout</a>\n        </div>");
    }
    else {
        res.send("\n        <div>\n            <h1>You're not logged in.</h1>\n            <a href=\"/login\">Login</a>\n        </div>");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', protect, function (req, res) {
    res.send("You are in!!");
});
export { router };
