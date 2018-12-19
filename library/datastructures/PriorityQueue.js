// TODO:: PriorityQueue implementation

const Heap = require('./Heap');

let PriorityQueue ={
    heapMaximum :function () {

    }, 

    heapMaximumExtract: function() {

    },

    heapIncreaseKey: function() {
         
    },

    heapInsertKey: function() {

    }
}

let heap = Heap;
// let data = [4,1,3,2,16,9,10,14,8,7];
let data = [23, 17, 14, 6, 13, 10, 1, 5, 7, 12];
// heap.buildMaxHeap(data);
let sorted = heap.sort(data);
console.log(sorted.values);