function SumSquares(l){
  let arr=[].concat(...l)
  for (let i=0;i<10;i++){
  arr=[].concat(...arr)
  }
  return arr.map(v=>v*v).reduce((a,b)=>a+b,0)
}