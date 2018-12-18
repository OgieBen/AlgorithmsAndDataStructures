let Queue = {
    front: undefined,
    rear: undefined,
    QueueItem: function (){
        let next = undefined;
        let val = undefined;
    },  
    add: function (val) {
         let q = new this.QueueItem();
         q.val = val;

         if (this.front){
             if(this.rear)
                this.rear.next = q;
             this.rear = q;
         }

         if(!this.front){
            this.front = q;
            this.rear = q;
         }
         
    },
}

let q = Queue;

q.add(9)
q.add(4);
q.add(6);
q.add(5);
q.add(7);
let next = q.front;
do{
    console.log(next.val)
    next = next.next;
}while(next);

