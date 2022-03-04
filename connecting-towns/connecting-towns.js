'use strict';


function processData(input) {
    var MOD = 1234567;
    var parse_fun = function (s) { return parseInt(s, 10); };

    var lines = input.split('\n');
    var T = parse_fun(lines.shift());
    var data = lines.splice(0, 2 * T);

    var res = [];
    for (var t = 0; t < T; t++) {
        var N = parse_fun(data[2 * t]);
        var roads = data[2 * t + 1].split(' ').splice(0, N - 1).map(parse_fun);
        var cnt = 1;
        for (var i = 0; i < N - 1; i++) {
            cnt *= roads[i];
            cnt %= MOD;
        }
        res.push(cnt);
    }
    console.log(res.join('\n'));
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});