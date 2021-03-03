"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var URL = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(URL).then(function (res) {
    var todo = res.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    console.log("\n    The TODO with id: " + id + "\n    Has title of: " + title + "\n\n    Is it completed, you ask? " + (completed ? 'Yes, sir!' : 'Sorry, no! :(') + "\n  ");
});
