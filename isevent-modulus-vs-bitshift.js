function isEvenModulus(num) {
    return num % 2 == 0;
}

function isEvenBitShift(num) {
    return ((num >>> 0).toString(2)).slice(-1) == 0;
}

var i,
    start,
    end;

start = performance.now();
for (i = 0; i < 100000; ++i) {
    isEvenModulus(i);
}
end = performance.now();

console.log('isEvenModulus', (end - start).toFixed(2), 'ms');

start = performance.now();
for (i = 0; i < 100000; ++i) {
    isEvenBitShift(i);
}
end = performance.now();

console.log('isEvenBitShift', (end - start).toFixed(2), 'ms');
