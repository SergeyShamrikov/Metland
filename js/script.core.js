;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.contactForm.init();
			self.hoverPeople();
			self.nextButton();
			self.navigation();

		},

		windowLoad: function(){

			var self = this;

			self.countPeopleSignedUp();
			self.counters();
			self.preloader();

		},

		windowScroll: function(){

			var self = this;
			
			// self.contentHide();
		},


		/**
		**	Counters
		**/

	   	counters: function(){

			var counter = $('.counter'),
				$wd = $(window),
				wh = $wd.height() / 1.5;

			if(!counter.length || $wd.width() >= 768) return;


			$(document).on("scroll",function(){

				counter.each(function(i, el){

					var $this = $(el),
						count = $this.attr('data-amount');

					if($wd.scrollTop() > $this.offset().top - wh && !$this.hasClass('counted')){

						$this.addClass('counted');

		                $this.animateNumber({ number: count },1000);
						
					}

	            });

			});

		},



		/**
		**	Preloader
		**/

		preloader :function(){

			setTimeout(function(){

				$("#preloader").addClass("load_page");
				
			},1000);

		},


		/**
		**	Form
		**/

		contactForm: {

			init: function(){

				var self = this;

				self.cF = $('.contactform');


				self.cF.on("submit", { obj: this }, self.eventHandler);

			},

			eventHandler: function(event){

				event.preventDefault();

				var self = event.data.obj,
				$this = $(this);

				if(!self.clientValidation($this) || self.cF.hasClass('informed')){

					return false;
				};

				$.ajax({
					url: 'php/contact-send.php', 
					type: 'post',
					data: $this.serialize(),
					success: function(data){

						var type = data.indexOf("success") != -1 ? 'success' : 'error';
						self.showMessage(data, type);
						document.location.href = "http://zanin-k.ru/test/Metland/success.html";
					}
				});

			},

			clientValidation: function(form){

				var self = this,
				collection = form.find('[required]'),
				minCCollection = form.find('[data-min-characters]'),
				message = "";

				collection.each(function(i, el){

					var $this = $(this);

					if($(el).val() == ""){

						message += "Все поля должны быть заполнены! <br>";
						return false;

					}

				});

				minCCollection.each(function(i, el){

					message += self.minCharacters($(el));

				});

				if(message !== "" && !form.hasClass('informed')){

					self.showMessage(message, 'error');

				}

				return message === "";
			},

			minCharacters: function(el){

				var amount = el.data('min-characters');

				return el.val().length < amount ? '"'+el.data('field-name') + '"  поле должно содержать минимум '+amount+' символов!' + "<br>" : "";

			},

			showMessage: function(data, type){

				var template = $("<div class='info_box t_hide' data-type='"+type+"'><p>"+data+"</p></div>"),
				f = this.cF;

				if(type === "success") f.find('input, textarea').val("");

				f.addClass('informed');

				template.appendTo(f).slideDown(function(){

					$(this)
					.delay(4000)
					.slideUp(function(){

						f.removeClass('informed');
						$(this).remove();

					});

				});

			},

   		},



		/**
		**	Subscribe Form
		**/


		subscribeForm: {

			init: function(){

				this.f = $('.subscribe');

				this.f.on('submit', { obj: this }, this.eventHandler);

			},

			eventHandler: function(event){

				event.preventDefault();

				if($(this).hasClass('informed')) return false;

				var obj = event.data.obj;

				$.ajax({

					url: 'php/subscribe.php',
					type: 'post',
					data: $(this).serialize(),
					success: function(data){
					obj.showMessage(data); 
					}

				});

			},

			showMessage: function(data){

				var type = data.indexOf("success") != -1 ? 'success' : 'error',
					template = $("<div class='info_box t_hide' data-type='"+type+"'><p>"+data+"</p></div>"),
					f = this.f;

				if(type === "success") f.find('input').val("");

				f.addClass('informed');
				template.appendTo(f).slideDown(function(){

					$(this)
					.delay(4000)
					.slideUp(function(){

						f.removeClass('informed');
						$(this).remove();

					});

				});

			}

		},

		/**
		**	Hover People Add
		**/

		hoverPeople :function(){

			$(".heder_box_2").hover(
				function(){
					$(this).find(".people_add").removeClass('flipOutY').addClass("flipInY");
				},
				function(){
					$(this).find(".people_add").removeClass("flipInY").addClass('flipOutY');	
				});
		},


		/**
		**	Next Button
		**/

	    nextButton : function(){

	    	var self = this;

	    	$("#next_slide").on("click",function(){

	    		$("#content").moveDown();

	    	});

	    },


	    navigation : function(){

	    	var self = this;

	    	$("#navigation>li").on("click",function(){

	    		var id = $(this).attr("data-menuanchor"),
	    			index = $("#"+id).index();

	    		$("#content").moveTo(index+1);   		

	    	});

	    },


		/**
		**	Subscribe Form
		**/

		countPeopleSignedUp : function(){

			// получам переменную из куки
			var val = $.cookie("val1"),
				nameIndex = $.cookie("nameIndex"),
				lastInd = $('#name_list').find("li:last-child").index(),
				index,
				qt;

			// проверяем есть ли в куки значени index и присваиваем его переменной
			if(nameIndex){
				index = +nameIndex;
			}
			else{
				index = 0;
			}

			// проверяем есть ли в куки значени количества и присваиваем его переменной
			if(val){
				qt = +val;
			}
			else{
				qt = 315;
			}


            function myFunc(){
            	if (self.TMR) clearTimeout (TMR);

            	var name = $('#name_list').find("li").eq(index).text();

            	// находим все счетчики и записываем в них значение переменной
            	$('.count_people_signed_up').each(function(){
					var obj = $(this);
					obj.text(qt + 1);



            	});
            	

            	$('.name_people_signed_box').each(function(){

            		$(this).find(".name").html(name);
            		$(this).find("img").addClass("flash");

            	});

            	$('.heder_box_2').addClass("active");

            	
            	setTimeout(function(){
            		$('.name_people_signed_box').find('img').removeClass("flash");
            		$('.heder_box_2').removeClass("active");
            	},1000);

            	// увеличиваем переменную на 1
				qt+=1;
				index+=1;

				if(index == lastInd+1){
					index = 0;					
				}

				if(qt > 999){
					qt = 100;					
				}


				// записываем переменную в куки
				$.cookie("val1", qt, {
				    expires: 5
				});

				// записываем имя в куки
				$.cookie("nameIndex", index, {
				    expires: 5
				});

				// задержка повторного выполнения функции
				self.TMR = setTimeout (myFunc, Math.random () * 52345);
            }
			myFunc();

		},
	}


	$(function(){

		Core.DOMReady();

            


	});

	$(window).load(function(){

		Core.windowLoad();

	});

	$(window).scroll(function(){

		Core.windowScroll();
		
	});


})(jQuery);