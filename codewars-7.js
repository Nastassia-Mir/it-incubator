function highAndLow(numbers){
  let arr=numbers.split(' ');
               return `${Math.max.apply(null, arr)} ${Math.min.apply(null, arr)}`
}