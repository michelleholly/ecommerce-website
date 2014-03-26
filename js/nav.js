// Toggel Nav JS

var navTop = document.querySelector('.nav-top');

document.querySelector('.nav-btn').addEventListener('click', function(e) {
	
	e.preventDefault();
	
	if (navTop.getAttribute('data-state') == 'expanded'){
		
		navTop.setAttribute('data-state', 'collapsed');
			
	}else{
		
		navTop.setAttribute('data-state', 'expanded'); 
	}

});

// Video JS

$(window).load(function() {
	
	var player = document.getElementById('player_1');
	$f(player).addEvent('ready', ready);

	function addEvent(element, eventName, callback) {
		if (element.addEventListener) {
			element.addEventListener(eventName, callback, false)
		}	else {
			elemet.attachEvent(eventName, callback, false);
		}
	}
	
	function ready(player_id) {
		var froogaloop = $f(player_id);
		froogaloop.addEvent('play', function(data) {
			$('.flexslider').flexslider("pause");
		});
		froogaloop.addEvent('pause', function(data) {
			$('.flexslider').flexslider("play");
		});
	}
	
	
	$(".flexslider")
		.fitVids()
		.flexslider({
			animation: "slide",
			useCSS: false,
			animationLoop: false,
			smoothHeight: true,
			before: function(slider){
				$f(player).api('pause');
			}
		});
});


