function nthFloyd(n){
  let num = n;
  for (let i=1; i<=n; i++) {
      num = num-i;
    if(num<=0) {
      return i
        }
    }
  }