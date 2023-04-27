class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SingleLikedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.length += 1;
        }
        return this
    }

    pop(){
        if (!this.head) return undefined;
        let current = this.head;
        let tailBone;
        while(current.next){
            tailBone = current;
            current = current.next;
        }
    this.tail.next = null;
        this.tail = tailBone;
        
        this.length--
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current.val
    }
    shift(){
        let result = this.head;
       this.head = this.head.next;
        this.length--
        return result.val;
    }

    unshift(val){
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this
    }

    get(val){
        if(val < 0 || val >= this.length ){
            return null
        }
        let node = this.head
         for(let i = 0; i < val; i++){
             node = node.next
         }
        return node
    }

    set(i, val){
         if( i < 0 || i >= this.length ){
            return false
        }
         let node = this.head
         for(let j = 0; j < i; j++){
             node = node.next
         }
        node.val = val
        return true
    }

    insert(i, val){
        if(i< 0 || i >= this.length) return false
        if (i === this.length-1) return this.push(val)
        if (i === 0) return this.unshift(val)
        let newNode = new Node(val)
        let backNode = list.get(i-1)
        newNode.next = backNode.next
        backNode.next = newNode;
        return true;
    }
}

let list = new SingleLikedList();
list.push('a')
list.push('b')
list.push('c')
list.push('d')
list.push('e')
list.push('f')
list.push('g')
list.push('h')
