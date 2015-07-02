var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {count: 0,
             storage: {}
            };
  _.extend(obj, stackMethods);
  return obj;

};

var stackMethods = {
  pop : function() {
    if (this.count) {
      var result = this.storage[this.count-1];  
      this.count--;        
    }
    return result;

  },

  push : function(value){  
    this.storage[this.count] = value;
    this.count++;
    
  },

  size : function() {
    return this.count;
  }
};


