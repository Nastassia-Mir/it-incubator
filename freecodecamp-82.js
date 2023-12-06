let count = 0;

function cc(card) {
  // Only change code below this line
if(card < 7 && card > 1) {
  count += 1;
} else if (card > 6  && card < 10){
  count = count;
} else if (card == 10  || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
  count -= 1;
}
 if(count > 0) {
   return `${count} Bet`
 } else return `${count} Hold`
}