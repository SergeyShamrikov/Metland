;(function($){

	"use strict";

	$(document).ready(function(){

        /* ------------------------------------------------
                Pagepiling
        ------------------------------------------------ */
            $('#content').pagepiling({
                menu: "#navigation",
                sectionsColor: [],
                anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
                scrollingSpeed: 500,
                navigation: false,
                sectionSelector: '.section_content',

                //events
                onLeave: function(index, nextIndex, direction){

                    var text = $(".section_content").eq(nextIndex).attr("data-text");
                    $("#next_slide").find(".next_slide_text").text(text); 

                },
                afterLoad: function(anchorLink, index){

                    var activSlide = $(".section_content").eq(index-1),
                        count = activSlide.find('.counter').length, 
                        bodyClass = activSlide.attr("data-hide");

                    $("body").removeClass("hide_header_btn hide_nav hide_next_btn").addClass(bodyClass);

                    if(count){
                        
                        $('.counter').each(function(){

                            var count = $(this).attr('data-amount');

                            $(this).animateNumber({ number: count },1000);
                        });

                    }
                }
            });

        /* ------------------------------------------------
                End of Pagepiling
        ------------------------------------------------ */

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