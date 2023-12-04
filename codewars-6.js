function descendingOrder(n){
  let str = n.toString();
  if(str.length > 1) {
     return parseFloat(str.split('').sort(function(a, b){return b - a}).join().replaceAll(',', ''))  
  } else return n;

}