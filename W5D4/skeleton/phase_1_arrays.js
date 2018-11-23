Array.prototype.uniq = function(){
  let uniqueArray = [];
  for(let i = 0;i< this.length;i++){
    if (uniqueArray.indexOf(this[i]) === -1){
      uniqueArray.push(this[i])
    }
  }
  return uniqueArray;
}
console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());

Array.prototype.twoSum = function(){
  let twoSumArray = [];
  for(let i = 0; i < this.length; i++){
    for(let j = i+1; j < this.length;j++){
      if(this[i]+this[j] === 0){
        twoSumArray.push([i,j]);
      }
    }
  }
  return twoSumArray
}

console.log([-1, 0, 2, -2, 1].twoSum());

Array.prototype.transpose = function(){
  let result = Array.from(
    { length: this[0].length },
    () => Array.from({ length: this.length })
  );

  for(let i = 0;i < this.length;i++){
    for(let j = 0;j < this[i].length;j++){
      result[j][i] = this[i][j];
    }
  }
  return result;
}
console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());
