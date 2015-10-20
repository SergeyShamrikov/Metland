;(function($){

	"use strict";

	$(document).ready(function(){

        /* ------------------------------------------------
                Onepage Scroll
        ------------------------------------------------ */

            $("#content").onepage_scroll({
               sectionContainer: ".section_content",     
               easing: "ease",                  
               animationTime: 1000,             
               pagination: false,                
               beforeMove: function(index) {},  
               afterMove: function(index) {

                    var text = $(".section_content").eq(index).attr("data-text"),
                        id = $(".section_content").eq(index-1).attr('id');

                    // nav
                    $("[data-menuanchor='"+id+"']").addClass('active').siblings().removeClass('active');

                    // text in button #next_slide
                    $("#next_slide").find(".next_slide_text").text(text);

                    // hide-show end counter 
                    var activSlide = $(".section_content").eq(index-1),
                        count = activSlide.find('.counter.first_cout').length, 
                        bodyClass = activSlide.attr("data-hide");

                    $("body").removeClass("hide_header_btn hide_nav hide_next_btn").addClass(bodyClass);

                    if(count){
                        
                        $('.counter').each(function(){

                            var count = $(this).attr('data-amount');

                            $(this).animateNumber({ number: count },1000);

                            $(this).removeClass('first_cout');
                        });

                    }

               },   
               loop: false,                     
               keyboard: true,                  
               responsiveFallback: 768,        
               direction: "vertical"              
            });


        /* ------------------------------------------------
                End of Onepage Scroll
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

        /* ------------------------------------------------
                validate
        ------------------------------------------------ */

            // enroll form

            $("#enroll_form").validate({

               rules:{

                    cf_name:{
                        required: true,
                        minlength: 4,
                        maxlength: 16,
                    },

                    cf_email:{
                        required: true,
                        email:true,
                    },
               },

               messages:{

                    cf_name:{
                        required: "Это поле обязательно для заполнения",
                        minlength: "Логин должен быть минимум 4 символа",
                        maxlength: "Максимальное число символо - 16",
                    },

                    cf_email:{
                        required: "Это поле обязательно для заполнения",
                        email: "Ваш адрес электронной почты неверен!"
                    },

               },

               submitHandler: function(form) {
                    form.preventDefault();

                    $.ajax({
                        url: 'php/contact-send.php', 
                        type: 'post',
                        data: $this.serialize(),
                        success: function(data){
                            document.location.href = "http://zanin-k.ru/test/Metland/success.html";
                        }
                    });
                }

            });

            // enroll form 2

            $("#enroll_form1").validate({

               rules:{

                    cf_name:{
                        required: true,
                        minlength: 4,
                        maxlength: 16,
                    },

                    cf_email:{
                        required: true,
                        email:true,
                    },
               },

               messages:{

                    cf_name:{
                        required: "Это поле обязательно для заполнения",
                        minlength: "Логин должен быть минимум 4 символа",
                        maxlength: "Максимальное число символо - 16",
                    },

                    cf_email:{
                        required: "Это поле обязательно для заполнения",
                        email: "Ваш адрес электронной почты неверен!"
                    },

               },

               submitHandler: function(form) {
                    form.preventDefault();

                    $.ajax({
                        url: 'php/contact-send.php', 
                        type: 'post',
                        data: $this.serialize(),
                        success: function(data){
                            document.location.href = "http://zanin-k.ru/test/Metland/success.html";
                        }
                    });
                }

            });

            // Reviews form

            $("#reviews_form").validate({

               rules:{

                    cf_name:{
                        required: true,
                        minlength: 4,
                        maxlength: 16,
                    },

                    cf_email:{
                        required: true,
                        email:true,
                    },

                    cf_phone:{
                        required: true,
                    },

                    cf_message:{
                        required: true,
                        minlength: 20,
                    },
               },

               messages:{

                    cf_name:{
                        required: "Это поле обязательно для заполнения",
                        minlength: "Логин должен быть минимум 4 символа",
                        maxlength: "Максимальное число символо - 16",
                    },

                    cf_email:{
                        required: "Это поле обязательно для заполнения",
                        email: "Ваш адрес электронной почты неверен!"
                    },

                    cf_phone:{
                        required: "Это поле обязательно для заполнения",
                    },

                    cf_message:{
                        required: "Это поле обязательно для заполнения",
                        minlength: "Минимальное число символо - 20"
                    },

               },

               submitHandler: function(form) {
                    form.preventDefault();

                    $.ajax({
                        url: 'php/reviews.php', 
                        type: 'post',
                        data: $this.serialize(),
                        success: function(data){
                            var type = data.indexOf("success") != -1 ? 'success' : 'error';
                            self.showMessage(data, type);
                        }
                    });
                }

            });

        /* ------------------------------------------------
                End of validate
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