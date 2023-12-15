Array.prototype.remove_ = function(integer_list, values_list){
  let result = integer_list.filter(item => {
  return !values_list.includes(item);});
  return result;
}