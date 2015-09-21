;(function($){

	"use strict";

	$(document).ready(function(){

		/* ------------------------------------------------
				Arcticmodal
		------------------------------------------------ */

			$(".modal_btn").on("click",function(event){

				event.preventDefault();

				var id = $(this).attr("data-modal"),
					src = $(this).attr("data-src");

				$('#'+id).arcticmodal({
					
					beforeOpen : function(){

						$('#'+id).find("iframe").attr("src", src+"?wmode=transparent");

					}

				});

			});

        /* ------------------------------------------------
				End of Arcticmodal
		------------------------------------------------ */


        /* ------------------------------------------------
				OwlCarousel
		------------------------------------------------ */

			if($('.owl-carousel').length){

		    	$('.owl-carousel').owlCarousel({
	                nav : true,
                    loop:true,
                    responsiveClass:true,
                    navText: [ '', '' ],
                    items:1,
                    animateIn:"bounceInRight",
                    autoplay:true
	            });

		    }

        /* ------------------------------------------------
				End of OwlCarousel
		------------------------------------------------ */

        /* ------------------------------------------------
				Wow JS
		------------------------------------------------ */

			if($('.wow').length){

				var wow = new WOW({

                  boxClass:     'wow',      // default
                  animateClass: 'animated', // default
                  offset:       0,          // default
                  mobile:       true,       // default
                  live:         true        // default

                })

                wow.init();
				
			}


        /* ------------------------------------------------
				End of Wow JS
		------------------------------------------------ */


	});

	$(window).load(function(){

		/* ------------------------------------------------
				Name pudin
		------------------------------------------------ */


        /* ------------------------------------------------
				End of Name pudin
		------------------------------------------------ */

	});

})(jQuery);