var riffle = require('jsriffle');

riffle.setFabric(process.env.WS_URL);
riffle.setLogLevelInfo();

var domain = riffle.Domain(process.env.DOMAIN);

var X = 1;
var O = 2;

var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0] ];

domain.onJoin = function() {
    this.register("play", riffle.want(function(cell) {
        board[cell/3][cell % 3] = X;
        return board;
    }, Number));
}

domain.join()
