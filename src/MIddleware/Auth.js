"use strict";
exports.__esModule = true;
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = require("../config");
var verifyToken = function (req, res, next) {
    var authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(400).send("header authorization doesn't exist");
    }
    var parts = authHeader.split(' ');
    if (parts.length < 2) {
        return res.status(400).send('header authorization incomplete');
    }
    var schema = parts[0], token = parts[1];
    if (!/^Bearer$/i.test(schema)) {
        return res.status(400).send('the Bearer in the header authorization is missing');
    }
    jsonwebtoken_1["default"].verify(token, config_1["default"].secret, function (err, decoded) {
        if (err) {
            var tokenExpired = err.expiredAt;
            return res.status(400).send({
                message: 'failed at verify header authorization',
                tokenExpired: tokenExpired
            });
        }
        req.body.id = decoded.id;
        next();
    });
};
exports["default"] = verifyToken;
