/**
 * @param {mixed} needle
 * @param {object} haystack 
 * @return {object|boolean}
 */

function find(needle, haystack) {
    var c, p;
    if (typeof haystack != 'object') return false;
    for (p in haystack) {
        if (haystack[p] === needle) {
            return haystack;
        }
        if (typeof haystack[p] == 'object') {
            c = find(needle, haystack[p]);
            if (c) return c;
        }
    }
    return false;
} 

var data = {
    a: '1',
    b: '2',
    c: [
        'my test string',
        'super',
        123
    ],
    d: {
        e: [
            'hello world'
        ],
        f: {
            g: 'yo momma',
            h: 55
        }
    }
};

console.log(find('my test string', data));
console.log(find('yo momma', data));
