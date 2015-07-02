var Queue = function(){
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function(){
    if(count){
      count--;
    }
    var item = storage[0];
    delete storage[0];
    for(var i = 0; i < count; i++){
      if(storage[i+1]){
        storage[i] = storage[i+1];
      }
    }

    return item;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};