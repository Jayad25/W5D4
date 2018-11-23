//

const array = [1,2,3,4,5];
Array.prototype.myEach = function(each){
  // let array = []

  for(let i = 0; i < this.length ; i++){
    each(this[i]);
  }
};
array.myEach((n) => {
  console.log(`${n}`);
});


Array.prototype.myMap = function(map){
  let array = []
    this.myEach( e => array.push(map(e)));
    return array;
}
x = array.myMap( e => e+e);
console.log(x);


Array.prototype.myReduce = function(red,initialValue){
  // x = this
  // let result = initialValue;
  // x.myEach(e => result = red(result,e))
  // return result;
// };
// reduce = array.myReduce((x,y) => x+y);
// console.log(reduce)
