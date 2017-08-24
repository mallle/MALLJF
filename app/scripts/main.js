console.log('\'Allo \'Allo!');

		// var currentSlide = 0; 
		// $(".swiper-button-prev").click(function() {
  // 			$(".slide-container").css("margin-left", "-=100vw");
  // 			 	currentSlide++;
  // 			 		if(currentSlide === $('.slide').length) {
  // 			 			currentSlide = 0;
  // 			 			$(".slide-container").css("margin-left", 0);
  // 			 		}
		// 	});

		// var currentSlide = 0; 
		// $(".swiper-button-next").click(function() {
  // 			$(".slide-container").css("margin-left", "-=100vw");
  // 			 	currentSlide++;
  // 			 		if(currentSlide === $('.slide').length) {
  // 			 			currentSlide = 0;
  // 			 			$(".slide-container").css("margin-left", 0);
  // 			 		}
  // 		});


		var currentSlide = 0; 
		$(".swiper-button-next").click(function() {
  			$(".slide-container").css("margin-left", "-=100vw");
  			 	currentSlide++;
  			 		if(currentSlide === $('.slide').length) {
  			 			currentSlide = 0;
  			 			$(".slide-container").css("margin-left", 0);
  			 		}
  		});
