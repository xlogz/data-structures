var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};


Queue.prototype = {
  enqueue: function(value){
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function(){
    if(this.count){
      var result = this.storage[0];      
      this.count--;
      for(var i = 0; i < this.count; i++){
        if(this.storage[i+1]){
          this.storage[i] = this.storage[i+1];
        }
      }
    }
    return result;
  },
  size: function(){
    return this.count;
  },
  constructor: Queue
}


