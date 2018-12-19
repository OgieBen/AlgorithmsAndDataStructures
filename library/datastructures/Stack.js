let Stack = {
    top: undefined,
    StackItem: function (){
        let next = undefined;
        let val = undefined;
    },  
    push: function (val) {
         let q = new this.StackItem();
         q.val = val;
         if (this.top){
             q.next = this.top;
         }
         this.top = q;
    },
}

module.exports = Stack;

let q = Stack;

q.push(9)
q.push(4);
q.push(6);
q.push(5);
q.push(7);
let next = q.top;
do{
    console.log(next.val)
    next = next.next;
}while(next);

