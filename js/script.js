$("#myNavbar a").on('click', function(event) {
let off = 70;
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;

   $('html, body').animate({
      scrollTop: -off + $(hash).offset().top
    }, 800, function(){
    });
  }
});

$("#scroll").on('click', function(event) {
let off = 70;
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: -off + $(hash).offset().top
    }, 800, function(){
    });
  }
});

$("#scrollTo>a").on('click', function(event) {
  let off = 70;  
  if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
  
      $('html, body').animate({
        scrollTop: -off + $(hash).offset().top
      }, 800, function(){
      });
    }
  });
