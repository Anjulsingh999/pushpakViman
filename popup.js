 // JavaScript to handle the button click event
 var flag = true;
 document.getElementById('toggleButton').addEventListener('click', function () {
   var overlay = document.getElementById('overlay');
   var card = document.getElementById('card');

   // Toggle the overlay and card's display property
   overlay.style.display = 'flex';
   card.style.display = 'block';
   if (flag) {

     card.style.transform = 'scale(.5)';

     flag = false;
   }
   // Trigger reflow and start fade in animation
   overlay.offsetHeight; // eslint-disable-line no-unused-expressions
   card.offsetHeight;    // eslint-disable-line no-unused-expressions
   card.style.opacity = 1;
   card.style.transition = '.55s ease';
   card.style.transform = 'scale(1)';
 });

 // JavaScript to close the pop-up card
 function closeCard() {
   var overlay = document.getElementById('overlay');
   var card = document.getElementById('card');

   card.style.opacity = 0;
   card.style.transform = 'scale(.5)';
   card.style.transition = '.55s ease';

   setTimeout(function () {
     overlay.style.display = 'none';
     card.style.display = 'none';
   }, 300); // Wait for the animation to complete
 }