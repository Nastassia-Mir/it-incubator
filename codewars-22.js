function mergeArrays(arr1, arr2) {
  arr1.push(...arr2);
  arr1.sort((a, b) => {
  return a - b;
});

  return arr1.filter((n,i) => arr1[i] != arr1[i+1]) ;
}