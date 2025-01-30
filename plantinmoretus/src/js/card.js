document.addEventListener("DOMContentLoaded", () => {


  document.querySelectorAll(".moretus__card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  
  document.querySelectorAll(".moretus__btn").forEach(button => {
    button.addEventListener("click", (event) => {
     
      event.stopPropagation();
      
 
      const card = button.closest('.moretus__content').querySelector('.moretus__card');
      
   
      if (card) {
        card.classList.toggle("flipped");
      } else {
        console.error('Card not found for this button!');
      }
    });
  });

});
