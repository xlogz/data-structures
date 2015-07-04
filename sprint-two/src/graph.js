var Graph = function(){
  var graph = {};
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

Graph.prototype.contains = function(node){
  var found = false;
  for(var i = 0; i < this.nodes.length; i++){
    if(node === this.nodes[i]){
      found = true;
    }
  }
  return found;
};

Graph.prototype.removeNode = function(node){
  for (var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i] === node) {
      delete this.nodes[i];
    }
  };
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var i = 0; i < this.edges.length; i++){
    if(this.edges[i].from === fromNode){
      if(this.edges[i].to === toNode){
        return true;
      }
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var edge = {
    from: fromNode,
    to: toNode
  }
  this.edges.push(edge);

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for(var i = 0; i < this.edges.length; i++){
    if(this.edges[i].from === fromNode){
      if(this.edges[i].to === toNode){
        delete this.edges[i].from;
        delete this.edges[i].to;
      }
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(node){
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

