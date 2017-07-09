
jQuery(document).ready(function($)
{
	
	$("#sp1, #sp2, #sp3, #sp4").mouseover(function(){
		var schedule = "#" + $(this).html();
		// console.log(schedule);
		$(schedule).show();
		// console.log("mouseover");
	});
	$("#sp1, #sp2, #sp3, #sp4").mouseout(function(){
		var schedule = "#" + $(this).html();
		// console.log(schedule);
		$(schedule).hide();
		// console.log("mouseout");
	});
		
});




