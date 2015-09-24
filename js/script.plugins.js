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

        /* ------------------------------------------------
				Maskedinput
		------------------------------------------------ */

			$(".phone_mask").mask("+7 (999) 999-9999");

        /* ------------------------------------------------
				End of Maskedinput
		------------------------------------------------ */

        /* ------------------------------------------------
				ClassyCountdown
		------------------------------------------------ */

                $('#countdown2').ClassyCountdown({

                    end: '400000',
                    now: '0',
                    labels: true,
                    labelsOptions: {
                    lang: {
                      days: 'Дней',
                      hours: 'Часов',
                      minutes: 'Минут',
                      seconds: 'Секунд'
                    },
                    style: 'font-family:\'Open Sans\'; font-size:14px; font-weight:400; color:#fff;'
                  },
                    style: {
                        element: "",
                        textResponsive: .7,
                        days: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        },
                        hours: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        },
                        minutes: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        },
                        seconds: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        }

                    }
                });
                
                $('#countdown3').ClassyCountdown({
                    end: '440000',
                    now: '0',
                    labels: true,
                    labelsOptions: {
                    lang: {
                      days: 'Дней',
                      hours: 'Часов',
                      minutes: 'Минут',
                      seconds: 'Секунд'
                    },
                    style: 'font-family:\'Open Sans\'; font-size:14px; font-weight:400; color:#fff;'
                  },
                    style: {
                        element: "",
                        textResponsive: .7,
                        days: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        },
                        hours: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        },
                        minutes: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        },
                        seconds: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        }

                    },
                    onEndCallback: function() {
                        console.log("Time out!");
                    }
                });

        /* ------------------------------------------------
				End of ClassyCountdown
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