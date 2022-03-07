const p = 1000000007;
const c = Math.pow(10, 6);
const r = (c*c) % p;

function processData(input) {
    input.split('\n').slice(1).map(function (x) {
        process.stdout.write(square(mod(x)) + '\n');
    })
    //Enter your code here
}

function mod(x) {
    if(x.length == 16) {
      var lead = parseInt(x.substring(0,1));
      var rest = parseInt(x.substring(1));
      return ( lead * (Math.pow(10, 15) % p) + (rest % p) ) % p;
    }
    x = parseInt(x);
    return x % p
}

function square(x) {
    x = x % p;
    x = Math.min(x, p-x);
    if (x < c ) {
        return (x*x) % p;    
    }
    x = x.toString();
    var lead = parseInt(x.slice(0, -6));
    var rest = parseInt(x.slice(-6));
    //console.log(lead);
    //console.log(rest);
    return ( (((lead*lead % p)*r) % p) + (((2*lead*rest % p)*c) % p) + ((rest*rest) % p) ) % p;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
