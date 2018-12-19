let Heap = {
    Arr: function(val) {
        let heapSize = undefined;
        this.values = val;
        this.len = this.values.length;
    },
    parent: function(index) {
        return Math.floor(index/2);
    },
    left: function(index) {
        return 2*index;
    },
    right: function(index) {
        return (2*index) + 1
    },
    maxHeap: function(arr, index) {
        let top = index;
        let left = this.left(index);
        let right = this.right(index);
        let largest = undefined;
        let values = arr.values;

        if (left <= arr.heapSize && values[left-1] > values[top-1] )
            largest = left;
        else
            largest = top;
        
        if (right <= arr.heapSize && values[right-1] > values[largest-1] )
            largest = right;
        
        if (largest !== top){
            let tmp = values[top-1];
            values[top-1] = values[largest-1];
            values[largest - 1] = tmp;
            this.maxHeap(arr, largest);
        }
    },

    buildMaxHeap: function(values){
        
        let arr = values instanceof this.Arr ? values : new this.Arr(values);
        arr.heapSize = arr.len;
        let itr = Math.floor(arr.heapSize/2);
        for(let i = itr; i > 0; i--){
            this.maxHeap(arr, (i));
        }
    },

    sort: function(values) {
        let arr = new this.Arr(values);
        this.buildMaxHeap(arr);
        let itr = arr.len;
        for(let i = itr; i > 1; i--){
            let tmp = arr.values[0];
            arr.values[0] = arr.values[i-1];
            arr.values[i-1] = tmp;
            arr.heapSize = arr.heapSize - 1;
            this.maxHeap(arr, 1)
        }
        return arr;
    },
    
}


module.exports = Heap;