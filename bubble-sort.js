/**
 * @param {mixed} needle
 * @param {object} haystack 
 * @return {object|boolean}
 * The dreaded bubblesort...
 */

Array.prototype.bubbleSort = function () {
    var n = this.length,
        i,
        newN,
        swap;
    while (n != 0) {        
        newN = 0;
        for (i = 0; i < n; ++i) {
            if (this[i-1] > this[i]) {
                swap = this[i-1];
                this[i-1] = this[i];
                this[i] = swap;
                newN = i;
            }
        }
        // subsumable
        // the last swap has items in their final position
        // set n to the last index there so we don't iterate over them again
        n = newN;
    }
};

var data = [6,5,1,8,3,7,2,9,4];
 
 data.bubbleSort();
 
 console.log(data);
