function toFreud(string) {
  let stringArr = string.split(' ');
  let result =[];
  if(string == "") return result.join('')
  for(let i=0; i< stringArr.length; i++) {
    result[i] = 'sex'
  }
return result.join(' ');
}