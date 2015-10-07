var data = [];

for (var i = 0; i < 1000000; ++i) {
    data.push(String(Math.round(Math.random(0, 9) + i)));
}

function runBitWiseCast() {
    var start = performance.now(),
        end,
        i,
        tmp = [];
    for (i = 0; i < data.length; ++i) {
        tmp[i] = ~~data[i];
    }    
    end = performance.now();
    return (end - start).toFixed(2);
}

function runParseIntCast() {
    var start = performance.now(),
        end,
        i,
        tmp = [];
    for (i = 0; i < data.length; ++i) {
        tmp[i] = parseInt(data[i]);
    }    
    end = performance.now();
    return (end - start).toFixed(2);
}

console.log('parseInt:', runParseIntCast(), 'ms');
console.log('bitwise:', runBitWiseCast(), 'ms');
