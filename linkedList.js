class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    getSize() {
        let counter = 0;
        let currentNode = this.head;

        while (currentNode.next) {
            counter +=1;
            currentNode = currentNode.next;
        }
        
        return counter;
    }

    clearList() {
        this.head = null;
    }

    getFirst() {
        return this.head;
    }
    
    getLast() {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        
        return currentNode;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node("1st");
const node2 = new Node("2nd");
node1.next = node2;

const newList = new LinkedList(node1);

console.log(newList)