document.addEventListener("keydown", () => {
   //Player 1
   const firstRandomNum = Math.floor(Math.random()*6) + 1

   const firstDicceImage = 'images/dice' + firstRandomNum + '.png';

   document.querySelectorAll('img')[0].setAttribute('src', firstDicceImage)
   //Player 2
   const secondRandomNum = Math.floor(Math.random()*6) + 1

   const secondDicceImage = 'images/dice' + secondRandomNum + '.png';

   document.querySelectorAll('img')[1].setAttribute('src', secondDicceImage)

   //Logic for winner
   if (firstRandomNum > secondRandomNum) {
  document.querySelector('h1').innerHTML = 'Player 1 Wins!';
  } else if (firstRandomNum < secondRandomNum) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins!';
  } else {
  document.querySelector('h1').innerHTML = "It's a Draw";
  }
})