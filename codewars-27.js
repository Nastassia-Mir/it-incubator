function every(arr, interval, start){
  interval=interval||1;
  const arr1=[];
  for(let i=0;i<arr.length;i++){
  if (i%interval===0){arr1.push(arr[i+(start||0)])}
  }
  return arr1.filter(v=>v!==undefined)  

}