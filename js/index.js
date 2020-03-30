$(document).ready(function(){


	//height define
	//const sec0Height  = $("#section0").height();
	//const videoHeight = $(".videoWrap").height();
	//$(".sectionwrap").css("height",(sec0Height-100)+"px");
	//$(".seccont").css("height",(sec0Height-(videoHeight+200))+"px");

	for(var i = 1; i <= 15; i++ )
	{
		$(".sec1box:nth-child("+i+")").css("background","url(image/badge_"+i+".png) top center no-repeat")
									  .css("background-size","150px 150px");
	}
});