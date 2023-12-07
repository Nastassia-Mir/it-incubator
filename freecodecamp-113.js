function rangeOfNumbers(startNum, endNum) {
  if (startNum <= endNum){
  const countArray = rangeOfNumbers(startNum + 1,endNum);
  countArray.unshift(startNum);
  return countArray;
} 
return [];
};
