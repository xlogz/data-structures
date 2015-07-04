var LinkedList = function(){
  var list = {};
  list.head = null; 
  list.tail = null; 

  list.addToTail = function(value){
    // Create New Node
    var newNode = Node(value); 
    // Check if list.head is null
    if (!list.head) {
      list.head = newNode; 
    };
    // Check if list.tail exists
    if (list.tail) {
      // Set the current list.tail.next value to the newNode
      list.tail.next = newNode; 
    };
    // Set tail to new Node
    list.tail = newNode; 
  };

  list.removeHead = function(){
   // Find current list.head
   var currentNode = list.head;
   // Set new list.head
   list.head = currentNode.next;
   //return currentNode's value
   return currentNode.value
  };

  list.contains = function(target){
    // Set currentNode to current list.head
    var currentNode = list.head;
    // While currentNode exists - loop 
    while(currentNode){
      // if currentNode's value equals the target, return true
      if(currentNode.value === target){
        return true;
      }else{
        // if not, net currentNode to the next node in list
        currentNode = currentNode.next; 
      }
    }
    // Return false if target is not in list
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

