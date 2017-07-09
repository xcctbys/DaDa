function show_img(x="schedule1")//显示图片函数，鼠标移到链接触发		
	{
	       	document.getElementById(x).style.display = "block";		
	
	}
 
function hide_img(x="schedule1")//隐藏图片函数，鼠标离开链接触发		
	{
	     	document.getElementById(x).style.display = "none";		
	}




//
//jQuery(document).ready(function($)
//{
//	
//	$("#sp1, #sp2, #sp3, #sp4").mouseover(function(){
//		var schedule = "#" + $(this).html();
//		// console.log(schedule);
//		$(schedule).show();
//		// console.log("mouseover");
//	});
//	$("#sp1, #sp2, #sp3, #sp4").mouseout(function(){
//		var schedule = "#" + $(this).html();
//		// console.log(schedule);
//		$(schedule).hide();
//		// console.log("mouseout");
//	});
//		
//});

