var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = Object.create(queueMethods);
  object.count = 0;
  object.storage = {};

  return object;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function(){
    if(this.count){
      var results = this.storage[0];
      this.count--;
    }
    for(var i=0; i < this.count; i++){
      if(this.storage[i+1]){
      this.storage[i] = this.storage[i+1];
      }
    }
    return results;
  },
  size: function(){
    return this.count;
  }
};


