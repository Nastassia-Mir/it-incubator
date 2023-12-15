function reverseMiddle(array) {
  let arrayL = array.length; 
  let ar = Math.round(arrayL/2); 
  let newArr = [];
  if(arrayL%2 == 0) {
    newArr.push(array[ar-1],array[ar])
  } else {
    newArr.push(array[ar-2],array[ar-1], array[ar])
  }
  return newArr.reverse();
}