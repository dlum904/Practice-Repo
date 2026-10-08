class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;
    while (currentNode !== null) {
        let nextNode = currentNode.next;
        while (nextNode !== null && nextNode.value === currentNode.value) {
            nextNode = nextNode.next;
        }
        currentNode.next = nextNode;
        currentNode = nextNode;
    }
    return linkedList
}



/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
    let currHead = head;

    while (currHead && currHead.next) {

        let nextHead = currHead.next;
        if (currHead.val === nextHead.val) {
            currHead.next = nextHead.next;
        } else {
            currHead = nextHead;
        }

    }

    return head;
};