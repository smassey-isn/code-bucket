/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {        
    if (1 === num) return true;
    if (num <= 0) return false;
    
    var primeFactors = [];
    
    var calcPrimeFactors = function (n) {
        var r = Math.sqrt(n),
            results = arguments[1] || [],
            x = 2;
            
        if (n % x) {
            x = 3;
            while((n % x) && ((x = x + 2) < r)) { }
        }
        
        x = (x <= r) ? x : n;
        
        results.push(x);
        
        return (x === n ? results : calcPrimeFactors(n/x, results));
    };
    
    primeFactors = calcPrimeFactors(num);

    return Math.max.apply(Math, primeFactors) < 7;
};

console.log(isUgly(14));
console.log(isUgly(8));
console.log(isUgly(6));
