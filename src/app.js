"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var mongoose_1 = require("mongoose");
var routes_1 = require("./routes");
var App = /** @class */ (function () {
    function App() {
        this.express = express_1["default"]();
        this.middleware();
        this.routes();
        this.database();
    }
    App.prototype.middleware = function () {
        this.express.use(express_1["default"].json());
        this.express.use(cors_1["default"]());
    };
    App.prototype.database = function () {
        mongoose_1["default"].connect('mongodb://localhost:27017/tsnode', {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });
    };
    App.prototype.routes = function () {
        this.express.use(routes_1["default"]);
    };
    return App;
}());
exports["default"] = new App();
