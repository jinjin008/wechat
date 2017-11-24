$(function() {
	setInterval(function() {
		var curr = $('#battery_body').width();
	
		if( curr >= 36) {
			$('#battery_body').width(4);
		} else {
			$('#battery_body').width(curr + 1)
			
		}		
		if($('#battery_body').width()<=10) {
			$('#battery_body').css("background-color" , "red");
		} else if( $('#battery_body').width()>10 && $('#battery_body').width()<28  ) {
			$('#battery_body').css("background-color" , "yellow");
		} else {
			$('#battery_body').css("background-color" , "lawngreen" );
		}				
	}, 6500);
})
