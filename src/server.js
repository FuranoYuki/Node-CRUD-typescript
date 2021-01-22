"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
app_1["default"].express.listen(process.env.PORT || 3333);
