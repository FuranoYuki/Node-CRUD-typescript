"use strict";
exports.__esModule = true;
var express_1 = require("express");
// Controllers
var User_1 = require("./Controller/User");
// Middleware
var Auth_1 = require("./MIddleware/Auth");
var routes = express_1.Router();
routes.post('/find', Auth_1["default"], User_1["default"].findUser);
routes.post('/create', User_1["default"].createUser);
routes.put('/update', Auth_1["default"], User_1["default"].updateUser);
routes["delete"]('/delete', Auth_1["default"], User_1["default"].deleteUser);
exports["default"] = routes;
