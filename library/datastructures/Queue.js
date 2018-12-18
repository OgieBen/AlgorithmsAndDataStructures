let Queue = {
    front: undefined,
    rear: undefined,
    QueueItem: function (){
        let next = undefined;
        let val = undefined;
        let prev = undefined;
    },  
    remove: function () {
        let rearPrev = this.rear.prev;
        rearPrev.next = undefined;
        this.rear = rearPrev;
    },
    add: function (val) {
         let q = new this.QueueItem();
         q.val = val;

        if(this.rear){
            this.rear.next = q;
            q.prev = this.rear;
            this.rear = q;
        }
         
         if(!this.front){
            this.front = q;
            this.rear = q;
         }
         
    },
}


// quick test
let q = Queue;

q.add(9)
q.add(4);
q.add(6);
q.add(5);
q.add(7);
q.remove();
q.remove();
q.remove();
let next = q.front;
do{
    console.log(next.val)
    // if(next.prev){
    //     let prev = next.prev.val;
    //     console.log('prev => ' + prev)
    // }
    next = next.next;
}while(next);