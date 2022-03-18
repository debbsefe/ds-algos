class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){

       this.head.value = value;
         this.tail.next = {head: this.head, value: this.value, next: null};
        
        
    }
}

const myLinkedList = new LinkedList(10);


class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        prev: null,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        prev: null,
        next: null
      }
      newNode.prev = this.tail
  
      this.tail.next = newNode;
  
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
              prev: null,
  
        next: null
      }
      newNode.next = this.head;
          this.head.prev = newNode
  
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        array.push(currentNode.value)
        currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value) {
      //Check for proper parameters;
      if (index >= this.length) {
        this.append(value);
        return this.printList();
      }
  
      const newNode = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(index - 1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
  
    remove(index) {
      if (index >= this.length) {
        console.log('index does not exist/not found')
        return;
      }
  
      const leader = this.traverseToIndex(index - 1);
  
      const eliminatingNode = leader.next;
      leader.next = eliminatingNode.next
      this.length--;
      return this.printList();
  
    }
  
    reverse() {
      let counter = 0;
  
    }
  
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  
  }
  
  let myLinkedList = new DoublyLinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  // myLinkedList.insert(2, 99);
  // myLinkedList.remove(2);
  // myLinkedList.remove(2);

