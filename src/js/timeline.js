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
//	$('navigation').click(function(){
//    $('navigation.visited').removeClass('visited');
//
//    $(this).addClass('visited');
//
//});
//
//
// navigation.visited {background:#d4504f 
//		  }
//		
//});


function changecolor(x="main_")
{
  document.getElementById("main_").style.background=""; //原色adadad，3c373d
  document.getElementById("caadria8_").style.background=""; 
  document.getElementById("callp_").style.background=""; 
  document.getElementById("callp2_").style.background=""; 
  document.getElementById("regist_").style.background=""; 
  document.getElementById("schedu_").style.background=""; 
  document.getElementById("other_").style.background=""; 
  document.getElementById("contact_").style.background=""; 
  document.getElementById(x).style.background="#d4504f"; //更改为红色
		
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

