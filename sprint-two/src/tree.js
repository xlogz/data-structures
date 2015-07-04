var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  // your code here
  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  // Create new child Tree
  var child = Tree(value);
  // Push child to 'this' tree structure
  this.children.push(child);

  // Return structure
  return this;

};

treeMethods.contains = function(target){
  // Set new var
  var tree = this;
  var result = false;
  var recurse = function(tree){
  //If this.value is true, return true          <----------
  //If this hasChildren                                   |
  //Iterate through children                              |
  //Check to see if children[x].value is equal to target -
  //Check to see if children[x] has children
  //Use recursion to move down the tree

    if(tree.value === target){
      result = true;
    }
    if(tree.children.length){
      for(var i = 0; i < tree.children.length; i++){
        var children = tree.children[i];
        recurse(children);
      }
    }
  };
  recurse(tree);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
