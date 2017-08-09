(function($){
	jQuery.fn.scrollVertical = function(options){
		return this.each(function(){
			$elem = $(this);
			//définition du css basic
			$elem.css({
				"background": "url('" + options.urlImg + "') no-repeat fixed",
				"background-position": "0% 0%",
				"background-size": "200% 100%"
			});
			//écoute du scroll
			$elem.on("scroll", function(e){
				//récupération du scrollTop (valeur "scrollée")
				var scrolled = $(this).scrollTop();
				//Défiler le fond avec un pourcentage
				$(this).css({"background-position": Math.round((scrolled*100)/$(this).prop('scrollHeight'))+"% 0%"});
			});
		});
	};
})(jQuery);