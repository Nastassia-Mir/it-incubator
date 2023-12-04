function createPhoneNumber(numbers){
  let str = '';
  let str1= '';
  let str2= '';
  for(let i=0; i < numbers.length; i++) {
    if(i <= 2) {
      str += numbers[i];
    } else if(2<i && i<6) {
      str1 += numbers[i];
    } else str2 += numbers[i];
  }
  return `(${str}) ${str1}-${str2}`
}