	var currentSwiper = new Swiper('.current-swiper',{
		direction: 'horizontal',
		loop : true,
		speed:1000,
		autoplay:true,
	});		
	var leftSwiper = new Swiper('.left-swiper',{
		loop : true,
		simulateTouch : false,
	});
	var rightSwiper = new Swiper('.right-swiper',{
		loop : true,
		simulateTouch : false,
	});			
	currentSwiper.controller.control = [leftSwiper,rightSwiper];
	
