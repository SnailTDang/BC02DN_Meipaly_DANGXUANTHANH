// var a = 0;
// $(window).scroll(function () {
//     var oTop = $("#counternumber").offset().top - window.innerHeight;
//     if (a == 0 && $(window).scrollTop() > oTop) {
//         $(".counter").each(function () {
//             if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//                 var $this = $(this),
//                 countTo = $this.attr("data-number");
//             $({
//                 countNum: $this.text()
//             }).animate(
//                 {
//                     countNum: countTo
//                 },

//                 {
//                     duration: 3200,
//                     easing: "swing",
//                     step: function () {
//                         //$this.text(Math.ceil(this.countNum));
//                         $this.text(
//                             Math.ceil(this.countNum).toLocaleString("en")
//                         );
//                     },
//                     complete: function () {
//                         $this.text(
//                             Math.ceil(this.countNum).toLocaleString("en")
//                         );
//                         //alert('finished');
//                     }
//                 }
//             );
//               } else {
//                 topbutton.style.display = "none";
//               }
            
//         });
//         a = 1;
//     }
// });

    $('.counter').countUp({
      'time': 2000,
      'delay': 10
    })
