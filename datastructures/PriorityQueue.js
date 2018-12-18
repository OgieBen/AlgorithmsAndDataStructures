// TODO:: PriorityQueue implementation



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

