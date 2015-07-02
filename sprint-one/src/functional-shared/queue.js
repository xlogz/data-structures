var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = {count: 0,
                storage: {}
                };

  _.extend(object, queueMethods);
  return object;
};

var queueMethods = {
    enqueue: function(value){
        this.storage[this.count]=value;
        this.count++;
    },
    dequeue: function(){
        if(this.count){
            this.count--;
        }
        var result = this.storage[0];
        for(var i = 0; i < this.count; i++){
            if(this.storage[this.count]){
                this.storage[i] = this.storage[i+1];
            }
        }
        return result;
    },
    size: function(){
        return this.count;
    }
};



