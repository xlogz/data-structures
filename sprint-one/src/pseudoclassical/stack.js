var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Stack.prototype = {
  push : function(value){
    this.storage[this.count] = value;
    this.count++;
  },
  pop : function(){
    if (this.count) {
      var result = this.storage[this.count-1];
      delete this.storage[this.count];
      this.count--;
    };
    return result;
  },
  size : function(){
    return this.count;
  },
  constructor : Stack,
};

