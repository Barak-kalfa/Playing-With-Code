class Node{
     constructor(val){
          this.val = val;
          this.prev = null;
     }
}

class Stack{
     constructor(){
          this.tail = null;
          this.pelvis = null;
          this.length = 0;
     }

     push(val){
          const newNode = new Node(val)
          if(this.length > 0){
               this.pelvis = this.tail;
          }
          this.tail = newNode;
          this.tail.prev = this.pelvis;
          this.length++
          return this.length
     }
     
     pop(){
          if(this.length === 0)return null;
          const result = this.tail;
          this.tail = this.pelvis;
          this.length--
          return result
     }
}

let stack = new Stack()

stack.push(1)
stack.push(2)
console.log(stack);
stack.pop()
console.log(stack);
