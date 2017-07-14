/**
 * Created by christine on 2017/7/14.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);