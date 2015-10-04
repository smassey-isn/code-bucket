Array.prototype.insertionSort = function () {
    var n = this.length,
        i,
        j,
        swap;
        
    for (i = 0; i < n; ++i) {
        swap = this[i];
        j = i;
        while (j > 0 && this[j-1] > swap) {
            this[j] = this[j-1];
            --j;
        }
        this[j] = swap;
    }
    
};

var data = [6,5,1,8,3,7,2,9,4];
 
 data.insertionSort();
 
 console.log(data);
