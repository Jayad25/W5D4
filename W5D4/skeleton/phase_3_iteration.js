Array.prototype.bubbleSort = function(){
  let sorted = false;
  while(!sorted){
  sorted = true;
  for(let i = 0; i < (this.length -1);i++){
    if(this[i] > this[ i + 1]){
      temp = this[i];
      this[i] = this[i+1];
      this[i+1] = temp;
      sorted = false
    }
  }
}
  return this;
};


console.log([4,2,1,5].bubbleSort());


String.prototype.substrings = function(){
  let subStrings = [];
  for(let i = 0; i < this.length ; i++){
    for(let j = i + 1; j <= this.length; j++){
      sub = this.slice(i,j);
      if(subStrings.indexOf(sub) === -1){
      subStrings.push(sub);
    }
    }
  }
  return subStrings;
};

console.log("jaya".substrings());
