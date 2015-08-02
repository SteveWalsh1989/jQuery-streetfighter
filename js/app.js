$(document).ready(function() {
	$(".ryu-cool").hide();
 	/* change from still to ready */
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    
  });

  $('.ryu').mouseleave(function() {
  	/* change from ready back to still*/
    $('.ryu-still').show();
    $('.ryu-ready').hide();
    $('.hadouken').hide();
    $('.ryu-throwing').hide();
    
  });

 /* shows throwing pose and hadouken when clicked on */
  $('.ryu').mousedown(function() {
  	console.log('mousedown')
  	$('.ryu-throwing').show();
  	$('.ryu-still').hide();
  	$('.ryu-ready').hide();
  	$('.hadouken').show();
	/* animation for hadouken*/
  	$('.hadouken').finish().show().animate(
 	 {'left': '1020px'},
  	500,
  	function() {
  	  $(this).hide();
   	  $(this).css('left', '520px');
  }
);
  });


  $('.ryu').mouseup(function() {
  	console.log('mousedown')
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  	$('.hadouken').hide();
  	})

  function playHadouken () {
   $('#hadouken-sound')[0].volume = 0.5;
   $('#hadouken-sound')[0].load();
   $('#hadouken-sound')[0].play();
}

/*  make ryu move when press x */
$(document).keydown(function(e) {
    if (e.keyCode == 88) {
      playCool();
      $('.ryu-action').hide();
      $('.ryu-cool').show();
    }   
  })

	$(document).keyup(function(e) {
    if (e.keyCode == 88) {
      $('#cool')[0].pause();
      $('#cool')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });

	
});