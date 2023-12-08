const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  const el = s.pop()
  s.unshift(el)
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();