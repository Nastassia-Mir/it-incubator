function removeSmallest(numbers) {
  const min = Math.min.apply(null, numbers);
  const index = numbers.indexOf(min);
  numbers = numbers.filter((n, i) => {
    if(n != min || i != index) return n; });
  return numbers;
}