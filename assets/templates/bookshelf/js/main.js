
let menuOpen = false; 
 
document.querySelectorAll('.tag__btn--burger').forEach(function(burgerBtn) { 
  burgerBtn.addEventListener('click', function() { 
    if (menuOpen) { 
      document.querySelectorAll('.tag__btn').forEach(function(navBtn) { 
        navBtn.classList.remove('tag__btn--active'); 
      }); 
      menuOpen = false; 
    } else { 
      document.querySelectorAll('.tag__btn').forEach(function(navBtn) { 
        navBtn.classList.add('tag__btn--active'); 
      }); 
      menuOpen = true; 
    } 
  }); 
});
document.addEventListener('DOMContentLoaded', function() {
  const handleButtonClick = (button) => {
    button.classList.toggle('active');
  };

  const addClickEventToButtons = (buttons) => {
    buttons.forEach(button => {
      button.addEventListener('click', () => handleButtonClick(button));
    });
  };

  const buttons = document.querySelectorAll('.tag__btn, .tag__btn--fixed');

  addClickEventToButtons(buttons);
});