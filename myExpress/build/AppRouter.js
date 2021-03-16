import express from 'express';
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    AppRouter.getInstance = function () {
        if (!AppRouter.instance) {
            AppRouter.instance = express.Router();
        }
        return AppRouter.instance;
    };
    return AppRouter;
}());
export { AppRouter };
