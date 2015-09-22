;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.scrollContent.init();
			self.counters();

		},

		windowLoad: function(){

			var self = this;

			self.countPeopleSignedUp();
			self.scrollContent.init();

		},

		windowScroll: function(){

			var self = this;
			
			// self.NameFunction();
		},


		/**
		**	Counters
		**/

	   	counters: function(){

			var counter = $('.counter'),
				$wd = $(window),
				wh = $wd.height() / 1.2;

			if(!counter.length) return;

			counter.each(function(){

				var $c = $(this),
					data = $c.data('amount');

				$c.attr('data-amount', 0);
				$c.data('c-amount', data);

			});

			$wd.on('scroll.counters', function(){

				counter.each(function(i, el){

					var $c = $(el),
						current = 0,
						data = $c.data('c-amount');

					if($wd.scrollTop() > $c.offset().top - wh && !$c.hasClass('counted')){

						$c.addClass('counted');

						var intId = setInterval(function(){

							$c.attr('data-amount', current++);

							if(current > data) clearInterval(intId);

						}, 4);

					}

					if(i == counter.length - 1 && $c.hasClass('counted')) $wd.off('.counters');

				});

			});

			$wd.trigger('scroll.counters');

		},


		/**
		**	Scroll Contant
		**/

		scrollContent :{

		    init : function(){

		    	var self = this;

				self.w = $(window);
				self.d = $(document);
				self.scrolUp;

				self.heightSlid();
				self.sticky();
				self.activeSlide();
				self.nextButton();
				self.navigation();
				self.contentHide();
				// self.contactForm.init();
				// self.subscribeForm.init();

				self.w.on('resize', function(){

					self.heightSlid();

				});

				self.d.on('scroll',function(){

					self.sticky();
					self.activeSlide();
					self.contentHide();

				});

		    },

		    heightSlid : function(){

				var self = this;

				$('.section_content').height(self.w.height());

				$(".section_content:not(:last-child):not(:first-child)").css({
					"margin-bottom": self.w.height()/2
				});		    	

		    },

		    sticky :function(){

		    	var self = this;    	

		    	$(".section_content").each(function(){

		    		var $this = $(this),
		    			text = $(this).next().attr("data-text"),
		    			windowScroll = self.d.scrollTop(),
		    			offset = $this.offset().top;

		    		if(windowScroll >= offset){
		    			
		    			$this.find(".section_content_inner").addClass("sticky_fixed");
		    		}
		    		else{
		    			
		    			$this.find(".section_content_inner").removeClass("sticky_fixed");
		    		
		    		}
		    	
		    	});
		    
		    },

		    nextButton : function(){

		    	var self = this;

		    	$("#next_slide").on("click",function(){

		    		var activSlide = $(".section_content.active"),
		    			scrollTop = activSlide.next().offset().top;

		    		$('html,body').stop().animate( { scrollTop: scrollTop }, 1000 );

		    	});

		    },

		    activeSlide : function(){

		    	var self = this;

		    	$(".section_content").each(function(){

		    		var $this = $(this),
		    			text = $this.next().attr("data-text"),
		    			windowScroll = self.d.scrollTop(),
		    			windowHeight = self.w.height(),
		    			offset = $this.offset().top;

		    		if(windowScroll + windowHeight / 3 > offset){

		    			$this.addClass("active").siblings().removeClass("active");

		    			$("#next_slide").find(".next_slide_text").text(text);
		    		}
		    		else{

		    			$this.removeClass("active");
		    			
		    		}

		    	});

		    	setTimeout(function(){

		    		if($(".section_content.active:not(:first-child)").length){

				    	var id = $(".section_content.active").attr("id");

				    	$("#navigation>li[data-id='"+id+"']").addClass("current").siblings().removeClass("current");
		    		}
		    		else{
		    			$("#navigation>li").removeClass('.current');	
		    		}
				
		    	},1000);

		    },

		    navigation : function(){

		    	var self = this;

		    	$("#navigation>li").on("click",function(){

		    		var id = $(this).attr("data-id"),
		    			offset = $("#"+id).offset().top;

		    		$('html,body').stop().animate( { scrollTop: offset }, 1000 );

		    	});

		    },

		    contentHide : function(){

		    	var self = this;

		    	$(".section_content").each(function(){

		    		var $this = $(this),
		    			bodyClass = $this.attr("data-hide"),
		    			windowScroll = self.d.scrollTop(),
		    			windowHeight = self.w.height(),
		    			offset = $this.offset().top;

		    		if(windowScroll + windowHeight / 3 > offset){

		    			$("body").removeClass("hide_header_btn hide_nav hide_next_btn").addClass(bodyClass);

		    		}

		    	});

		    }

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

					}
				});

			},

			clientValidation: function(form){

				var self = this,
				collection = form.find('[required]'),
				minCCollection = form.find('[data-min-characters]'),
				message = "";

				collection.each(function(i, el){

					if($(el).val() == ""){

						message += "All required fields must be filled! <br>";
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

				return el.val().length < amount ? '"'+el.data('field-name') + '"  field should contain minimum '+amount+' characters!' + "<br>" : "";

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
		**	Subscribe Form
		**/

		countPeopleSignedUp : function(){
			var val = $.cookie("val1"), 
				qt;
			if(val){
				qt = +val;
			}
			else{
				qt = 315;
			}

            function myFunc(){
            	if (self.TMR) clearTimeout (TMR);
            	$('.count_people_signed_up').each(function(){
					var obj = $(this);
					obj.text(qt + 1);

            	});
				self.TMR = setTimeout (myFunc, Math.random () * 12345);
				qt+=1;
				$.cookie("val1", qt, {
				    expires: 5
				});
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