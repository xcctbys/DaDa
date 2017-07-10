function show_img(x="schedule1")//显示图片函数，鼠标移到链接触发		
	{
	       	document.getElementById(x).style.display = "block";		
	
	}
 
function hide_img(x="schedule1")//隐藏图片函数，鼠标离开链接触发		
	{
	     	document.getElementById(x).style.display = "none";		
	}
function show_assay(x="assay6")

{
	document.getElementById("assay6").style.display = "none";
	document.getElementById("assay7").style.display = "none";
	document.getElementById("assay8").style.display = "none";
	document.getElementById("assay9").style.display = "none";
	document.getElementById("assay10").style.display = "none";
	document.getElementById("assay11").style.display = "none";
	document.getElementById(x).style.display = "block";


}//显示图片函数，鼠标移到链接触发	

function show_schedule(x="schedule1")

{
	document.getElementById("schedule1").style.display = "none";
	document.getElementById("schedule2").style.display = "none";
	document.getElementById("schedule3").style.display = "none";
	document.getElementById("schedule4").style.display = "none";
	document.getElementById(x).style.display = "block";


}//显示图片函数，鼠标移到链接触发	









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

