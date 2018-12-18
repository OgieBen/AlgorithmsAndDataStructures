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