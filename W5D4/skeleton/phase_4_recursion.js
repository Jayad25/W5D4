function range(start,end){
   if (start === end){
  return [];
}

  let result = range(start,end-1);
  result.push(end-1);
  return result;
}
console.log(range(1,10));

function sumRec(arr){
  if (arr.length === 1){
    return arr[0];
  }
  let result = arr[arr.length-1] + sumRec(arr.slice(0,arr.length-1));
  return result;
}

console.log(sumRec([1,2,3,5]));


function exponent1(base,exp){
  if(exp === 0){
    return 1;
  }
  let result = base * exponent1(base,exp-1);
  return result;
}

console.log(exponent1(3,3));

function exponent2(base,exp){
// if(exp === 0){
//   return 1;
// }
//
//   if ((exp % 2) === 0){
//     return base * exponent2(base, (exp / 2));
//   }
// else{
//   return base * exponent2(base,((exp -1) / 2));
//   }
}


function fibonacci(n){
  if (n <=2)
  return [0,1].slice(0,n)
  let result = fibonacci(n-1);
  result.push(result[result.length - 1] + result [result.length - 2]);
  return result;
}

console.log(fibonacci(5));


function deepDup(arr){

}

function bsearch(numbers,target){
  if(numbers.length === 0){
    return -1;
  }
  let middle = Math.floor(numbers.length / 2);
  let num = numbers[middle];

  if (target === num){
    return middle;
  }else if (target < num){
    return bsearch((numbers.slice(0,middle)),target);
  }else{
    x = bsearch((numbers.slice(middle+1)),target);
    return x === -1 ? -1 : x+middle+1;

  }
  }

  console.log("vadszvx"+bsearch([1,2,3]),2);


  function mergeSort(arr){
    if(arr.length <= 1){
      return arr;
    }else{
      let middle = Math.floor(arr.length / 2);
      let left = mergeSort(arr.slice(0,middle));
      let right = mergeSort(arr.slice(middle));
      return merge(left,right);
    }
  }

  function merge(left,right){
    let result = [];
    while(left.length > 0 && right.length > 0){
      if(left[0] < right[0]){
        result.push(left.shift());
      }else{
        result.push(right.shift());
      }
    }
    return result.concat(left,right);
  }

  console.log(mergeSort([1,4,2,3]));



  function subsets(arr){
    
  }
