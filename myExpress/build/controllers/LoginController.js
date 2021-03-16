var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { controller } from './decorators/controller.js';
import { get, post } from './decorators/routes.js';
import { bodyValidator } from './decorators/bodyValidator.js';
// import { use } from './decorators/use.js';
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getLogin = function (req, res) {
        res.send("\n      <form method=\"POST\">\n        <div>\n          <label>Email</label>\n          <input type=\"email\" name=\"email\"/>\n        </div>\n        <div>\n          <label>Password</label>\n          <input type=\"password\" name=\"password\"/>\n        </div>\n        <button type=\"submit\">Submit</button>\n      </form>\n    ");
    };
    LoginController.prototype.post = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email === 'h@h.com' && password === 'p') {
            req.session = { loggedIn: true };
            res.redirect('/');
        }
        else {
            res.send('<h1>Wrong credentials.</h1>');
        }
    };
    LoginController.prototype.getLogout = function (req, res) {
        req.session = undefined;
        res.redirect('/');
    };
    __decorate([
        get('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        post('/login'),
        bodyValidator('email', 'password'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "post", null);
    __decorate([
        get('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogout", null);
    LoginController = __decorate([
        controller('/auth')
    ], LoginController);
    return LoginController;
}());
