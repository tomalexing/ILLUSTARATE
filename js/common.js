$(document).ready(function() {
// overlay fx on blog-slides
  $( '.slider .cycle-slideshow' ).on( ' cycle-before', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
     
    $(outgoingSlideEl).siblings(".circle").animate({
         left: "20%",
         opacity: "0"
      }, function() {
    $(".circle").css({left: "100%"});
  });
    	

  });

  $( '.slider .cycle-slideshow' ).on( 'cycle-after', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
   $(incomingSlideEl).siblings(".circle").animate({
      left: "50%",
      opacity: ".7"
    });
 });
	//$("#pic1").ccs("background-image", "url('./icons/pic.png')");  

 
});

function buildCarousel(visibleSlides) {
    $('.row').cycle({
        carouselVisible: visibleSlides
    });
     $('.row .thumbnail').css('opacity','1');

}
function buildSlideshow() {
    $('.slider .cycle-slideshow').cycle();
}

function initCycle() {
    var width = $(document).width();
    var visibleSlides ;
    
    if ( width > 1200 ) {visibleSlides = 3}
    else if(width > 700&& width < 1200) {visibleSlides = 2}
    else {visibleSlides = 1};
	buildSlideshow();
    buildCarousel(visibleSlides);
}

function reinit_cycle() {
    var width = $(window).width();
    
    if(width > 920)
     	$('.topnav').animate({
			'height':'65px'
			}, 1000);

     
    var destroyCarousel = function() { // create a function
        $('.row').cycle('destroy');
    }

    if (width > 1200) {
        destroyCarousel(); // call the function
        reinitCycle(3);
    } else if (width > 700 && width < 1200) {
        destroyCarousel();
        reinitCycle(2);
    } else if (width < 700 ){
        destroyCarousel();
        reinitCycle(1);
    }
}

function reinitCycle(visibleSlides) {
    buildCarousel(visibleSlides);
}
var reinitTimer;
$(window).resize(function() {
    clearTimeout(reinitTimer);
    reinitTimer = setTimeout(reinit_cycle, 100);
});

$(document).ready(function() {
    initCycle();  




	// $(".header_logo").find('strong').each(function anim_b() {
 //        $(this).
 //            animate({ 'border-spacing': 500},
	// 		{
 //  				step: function(now, fx) {
 //    				$(fx.elem).css({"background-position": "0px "+now+"px"});
 // 				},
 // 				duration: 25000,
 // 				complete: function(){
 // 					$(this).css({'border-spacing': 0});
 // 					$(this).css({"background-position": "0px 0px"});
 // 					anim_b.call([this]);
 					
 // 				}
 // 			});
     
	// });

	
var flag=1;
	$('.mmenu').on('click',function() {
		if (flag)
		$('.topnav').animate({
			'height':'700px'
		},{
			duration: 1000,
 			complete: function(){
 				flag = 0;
 		}});
		else
			$('.topnav').animate({
			'height':'65px'
			},{
			duration: 1000,
 			complete: function(){
 				flag = 1;
 		}});
	});
// $(window).resize(function() {
// 	var width = $(window).width();
//     if(width) > 920
//     	$('.topnav').animate({
// 			'height':'65px'
// 			}, 1000);
// });
$( window ).scroll(function(){
	clearTimeout(rescrollTimer);
    rescrollTimer = setTimeout(action , 100);

});

});
var rescrollTimer;
var elNarrowOffset = 80;
var dscroll=1;
function action() {
	
    var wScrollCurrent = $(window).scrollTop();
    dscroll = dscroll - wScrollCurrent;
    if( wScrollCurrent > elNarrowOffset && dscroll<0) // toggles "narrow" classname
 	{
         $( ".logo" ).addClass('logo--hidden');
 	}
    else $( ".logo" ).removeClass('logo--hidden');
    // ...
    dscroll = wScrollCurrent;
};

