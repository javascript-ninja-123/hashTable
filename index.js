//double linkedList


class Node{
  constructor(val){
    this.next = null;
    this.prev = null;
    this.val = val;
  }
}

class DoubleLink{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  createNodeWithNext(val,node){
    const result = new Node(val)
    result.next = node;
    return result;
  }

  createNodeWithPrev(val,node){
    const result = new Node(val)
    result.prev = node;
    return result;
  }

  push(val){
    if(!this.head){
      this.head = new Node(val);
      this.head.next = new Node(val);
      this.tail = new Node(val);
      this.tail.prev = new Node(val);
      this.length++;
      return this;
    }
    let prevTail;
    if(this.length === 1){
      prevTail = this.head;
    }
    else{
      prevTail = this.tail;
    }
    this.tail = new Node(val);
    this.tail.prev = prevTail;
    prevTail.next = this.tail;
    this.length++;
    return this;
  }
  pop(){
    if(!this.head) return undefined;
    if(this.length === 1){
      this.tail = null;
      this.head = null;
      this.length--;
      return this;
    }
    //edgy case for two variables
    //has not figured out yet
    // if(this.length === 2){
    //   this.tail = this.head;
    //   this.tail.next = null;
    //   this.tail.prev = this.head;
    //   this.head.next = this.tail;
    //   this.head.prev = null;
    //   this.length--;
    //   return this;
    // }
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    return this;
  }
  unshift(val){
    if(!this.head){
      this.head = new Node(val);
      this.head.next = new Node(val);
      this.tail = new Node(val);
      this.tail.prev = new Node(val);
      this.length++;
      return this;
    }
    if(this.length === 1){
       this.head = new Node(val);
       this.tail.prev = this.head;
       this.head.next = this.tail;
       this.length++;
       return this;
    }
    const tempHead = this.head;
    this.head = new Node(val);
    tempHead.prev = this.head;
    this.head.next = tempHead;
    this.length++;
    return this;
  }
  shift(){
    if(!this.head) return undefined;
    if(this.length === 1){
      this.head = null;
      this.tail = null
      this.length--;
      return this;
    }
    //edgy case for two variables
    //has not figured out yet
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return this;
  }
  insert(index,val){
    if(index < 0 || index > this.length) return undefined;
    if(index === this.length) return this.push(val)
    
  }
}








const a = new DoubleLink();
a.push(1)
a.push(2)
a.shift()
console.log(a)
