function animateFace() {

	var designerImg 	= $('#designer-img');
	var coderImg 		= $('#coder-img');
	var designerHover	= $('#designer');
	var coderHover		= $('#coder');
	var designerDesc	= $('#designer-desc');
	var coderDesc		= $('#coder-desc');	
	var designerArrow	= $('#designer-arrow');
	var coderArrow		= $('#coder-arrow');		
	var designerBg		= $('#designer-bg');
	var coderBg			= $('#coder-bg');
	var face 			= $('#face');
	var section 		= $('#section');
	var duration 		= 500;

	var mouseX = 0;
	var relMouseX = 520;
	var xp = 520;
	var loop = 0;
	frameRate =  30;
	timeInterval = Math.round( 1000 / frameRate );		

	// Firstly animate the bottom content onto the page
	animateContent();

	section.mouseenter(function(e){

		// Get mouse position
		section.mousemove(function(e){

		   	// raw mouse position
		   	mouseX = e.pageX;

		   	// mouse position relative to face div
		   	relMouseX = mouseX - face.offset().left;

		});
		
		// Animate the face based on mouse movement
		loop = setInterval(function(){

			// zeno's paradox dampens the movement
			xp += (relMouseX - xp) / 12;

			designerImg.css({width:420 + (520 - xp) * 0.5, left: 100 + (520 - xp) * 0.1});
		    coderImg.css({width:420 + (xp - 520) * 0.5, right: 100 - (520 - xp) * 0.1});

		    designerBg.css({left: 100 + (520 - xp) * 0.05, opacity: ((1040 - xp)/520)});
		    coderBg.css({right:  100 + (xp - 520) * 0.05, opacity: (xp/520)});

		    designerDesc.css({opacity: ((1040 - xp)/520)});
		    coderDesc.css({opacity: (xp/520)});

		}, timeInterval );

	}).mouseleave(function(e){ 

		// reset the face to initial state
		clearInterval(loop);
		xp 			= 520;
		mouseX 		= 0;
		relMouseX 	= 520;

		designerImg.hoverFlow(e.type, {width: 420, left: 100}, duration, 'easeOutQuad');
		coderImg.hoverFlow(e.type, {width: 420, right: 100}, duration, 'easeOutQuad');
		coderDesc.hoverFlow(e.type, {opacity: 1}, duration, 'easeOutQuad');
		designerDesc.hoverFlow(e.type, {opacity: 1}, duration, 'easeOutQuad');
		coderBg.hoverFlow(e.type, {right:100, opacity: 1}, duration, 'easeOutQuad');
		designerBg.hoverFlow(e.type, {left:100, opacity: 1}, duration, 'easeOutQuad');

	}); 
	
}; 

