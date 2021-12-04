$(document).ready(function(){
    $('.main-menu .menu__item .item__link').click(function(){
      $('.menu__item .item__link').removeClass("active");
      $(this).addClass("active");
  });
});

// window.addEventListener('load', function(){
//   const actives = document.querySelectorAll('.item__link');
//   const classActives = document.querySelectorAll('.active');


//   actives.forEach(active => {
//     active.addEventListener('click', function(){
//       classActives.forEach(classActive => {
//         classActive.classList.remove('avtive');
//       });
//       active.classList.add(active);
//     });
//   });
// })

// function hideButtons(){
//   const actives = document.querySelectorAll('.item__link');
//   Array.from( actives ).forEach(active => {
//     active.addEventListener('click', function() {
//       this.classList.add('active');
//       active.classList.remove('active');
//     })
//   });
// }

// hideButtons()

// window.addEventListener('load', function(){
//   const currentLocation = location.href;
//   const menuItems = document.querySelectorAll('.item__link');
//   const menuLengt = menuItems.length

//   for (let i = 0; i< menuLengt; i++) {
//     if(menuItems[i].href === currentLocation) {
//       menuItems[i].className = 'active'
//     }
//   }
// })