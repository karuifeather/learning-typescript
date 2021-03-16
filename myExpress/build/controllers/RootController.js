var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { get } from './decorators/routes.js';
import { controller } from './decorators/controller.js';
import { use } from './decorators/use.js';
var protect = function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send("<h2>Forbidden.</h2>");
};
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        if (req.session && req.session.loggedIn) {
            res.send("\n          <div>\n              <h1>You're logged in.</h1>\n              <a href=\"/auth/logout\">Logout</a>\n          </div>");
        }
        else {
            res.send("\n          <div>\n              <h1>You're not logged in.</h1>\n              <a href=\"/auth/login\">Login</a>\n          </div>");
        }
    };
    RootController.prototype.getProtected = function (req, res) {
        res.send("You are in!!");
    };
    __decorate([
        get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        get('/protected'),
        use(protect),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        controller('')
    ], RootController);
    return RootController;
}());
