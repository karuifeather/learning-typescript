/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/views/UserForm.ts":
/*!*******************************!*\
  !*** ./src/views/UserForm.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserForm = void 0;
var UserForm = /** @class */ (function () {
    function UserForm(parent) {
        this.parent = parent;
    }
    UserForm.prototype.eventsMap = function () {
        return {
            'click:button': this.onButtonClick,
            'mouseenter:h1': this.onHeaderHover,
        };
    };
    UserForm.prototype.onHeaderHover = function () {
        console.log('H1 was hovered');
    };
    UserForm.prototype.onButtonClick = function () {
        console.log('Button was clicked!!');
    };
    UserForm.prototype.template = function () {
        return "\n    <div>\n      <h1>User Form</h1>\n      <input/>\n      <button>Click</button>\n    </div>\n    ";
    };
    UserForm.prototype.bindEvents = function (fragment) {
        var eventsMap = this.eventsMap();
        var _loop_1 = function (eventKey) {
            var _a = eventKey.split(':'), event_1 = _a[0], selector = _a[1];
            fragment.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener(event_1, eventsMap[eventKey]);
            });
        };
        for (var eventKey in eventsMap) {
            _loop_1(eventKey);
        }
    };
    UserForm.prototype.render = function () {
        var template = document.createElement('template');
        template.innerHTML = this.template();
        this.bindEvents(template.content);
        this.parent.append(template.content);
    };
    return UserForm;
}());
exports.UserForm = UserForm;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var UserForm_1 = __webpack_require__(/*! ./views/UserForm */ "./src/views/UserForm.ts");
var userForm = new UserForm_1.UserForm(document.getElementById('root'));
userForm.render();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teUZyYW1ld29yay8uL3NyYy92aWV3cy9Vc2VyRm9ybS50cyIsIndlYnBhY2s6Ly9teUZyYW1ld29yay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teUZyYW1ld29yay8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxnQkFBZ0I7Ozs7Ozs7VUMxQ2hCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDckJhO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELGlCQUFpQixtQkFBTyxDQUFDLGlEQUFrQjtBQUMzQztBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVXNlckZvcm0gPSB2b2lkIDA7XHJcbnZhciBVc2VyRm9ybSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFVzZXJGb3JtKHBhcmVudCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgfVxyXG4gICAgVXNlckZvcm0ucHJvdG90eXBlLmV2ZW50c01hcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAnY2xpY2s6YnV0dG9uJzogdGhpcy5vbkJ1dHRvbkNsaWNrLFxyXG4gICAgICAgICAgICAnbW91c2VlbnRlcjpoMSc6IHRoaXMub25IZWFkZXJIb3ZlcixcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIFVzZXJGb3JtLnByb3RvdHlwZS5vbkhlYWRlckhvdmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIMSB3YXMgaG92ZXJlZCcpO1xyXG4gICAgfTtcclxuICAgIFVzZXJGb3JtLnByb3RvdHlwZS5vbkJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCdXR0b24gd2FzIGNsaWNrZWQhIScpO1xyXG4gICAgfTtcclxuICAgIFVzZXJGb3JtLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJcXG4gICAgPGRpdj5cXG4gICAgICA8aDE+VXNlciBGb3JtPC9oMT5cXG4gICAgICA8aW5wdXQvPlxcbiAgICAgIDxidXR0b24+Q2xpY2s8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICAgIFwiO1xyXG4gICAgfTtcclxuICAgIFVzZXJGb3JtLnByb3RvdHlwZS5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKGZyYWdtZW50KSB7XHJcbiAgICAgICAgdmFyIGV2ZW50c01hcCA9IHRoaXMuZXZlbnRzTWFwKCk7XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gZXZlbnRLZXkuc3BsaXQoJzonKSwgZXZlbnRfMSA9IF9hWzBdLCBzZWxlY3RvciA9IF9hWzFdO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRfMSwgZXZlbnRzTWFwW2V2ZW50S2V5XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yICh2YXIgZXZlbnRLZXkgaW4gZXZlbnRzTWFwKSB7XHJcbiAgICAgICAgICAgIF9sb29wXzEoZXZlbnRLZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBVc2VyRm9ybS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cyh0ZW1wbGF0ZS5jb250ZW50KTtcclxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGVtcGxhdGUuY29udGVudCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFVzZXJGb3JtO1xyXG59KCkpO1xyXG5leHBvcnRzLlVzZXJGb3JtID0gVXNlckZvcm07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFVzZXJGb3JtXzEgPSByZXF1aXJlKFwiLi92aWV3cy9Vc2VyRm9ybVwiKTtcclxudmFyIHVzZXJGb3JtID0gbmV3IFVzZXJGb3JtXzEuVXNlckZvcm0oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XHJcbnVzZXJGb3JtLnJlbmRlcigpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9