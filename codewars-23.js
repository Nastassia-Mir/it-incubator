function well(x){
  let count = 0;
   for(let i=0; i < x.length ; i++) {
     if(x[i] == 'good') count ++
   }
   if(count == 1 || count == 2) return 'Publish!'
  if(count >= 3) return 'I smell a series!'
  else return 'Fail!'
}