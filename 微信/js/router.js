$(function(){

	

//	/* 进入时加载 */	

	$("#dynamic").load("dynamic/02chat.html");
	$("#dynamic_nav").load("dynamic/01nav.html");
    
    

	//点击聊天时

	$("#menu-chat").click(function(){

		

		$("#dynamic").load("dynamic/02chat.html");

		
		$("#menu-chat .menu-icon").css("background-image","url(../img/微信-press.svg)");
        $("#menu-discover .menu-icon").css("background-image","url(../img/发现.svg)");
        $("#menu-friend .menu-icon").css("background-image","url(../img/通讯录.svg)");
        $("#menu-me .menu-icon").css("background-image","url(../img/我.svg)");
	})

	//点击发现时

	$("#menu-discover").click(function(){
		$("#dynamic").load("dynamic/03discover.html")
		
		$("#menu-chat .menu-icon").css("background-image","url(../img/微信.svg)");
        
        $("#menu-friend .menu-icon").css("background-image","url(../img/通讯录.svg)");
        $("#menu-me .menu-icon").css("background-image","url(../img/我.svg)");
		$("#menu-discover .menu-icon").css("background-image","url(../img/发现-press.svg)");
		

	})

    $("#menu-friend").click(function(){
		$("#dynamic").load("dynamic/add_list.html")
//		$("#nav_center_content").html("通讯录");
		$("#menu-chat .menu-icon").css("background-image","url(../img/微信.svg)");
        $("#menu-friend .menu-icon").css("background-image","url(../img/通讯录-press.svg)");
        $("#menu-discover .menu-icon").css("background-image","url(../img/发现.svg)");
        $("#menu-me .menu-icon").css("background-image","url(../img/我.svg)");
	    

	})
	
    $("#menu-me").click(function(){
		$("#dynamic").load("dynamic/me.html")

		$("#menu-chat .menu-icon").css("background-image","url(../img/微信.svg)");
        $("#menu-friend .menu-icon").css("background-image","url(../img/通讯录.svg)");
        $("#menu-discover .menu-icon").css("background-image","url(../img/发现.svg)");
	    $("#menu-me .menu-icon").css("background-image","url(../img/我-press.svg)");

	})
 
// $("#dynamic,#chat_itmes").click(function(){
//		
//	    
//		$("#dynamic_nav").load("dynamic/nav/02nav.html");
//		$("#chat").load("dynamic/chat/01chat.html");
//		$("#menus").hide();
//		
//	})
//
//
//  $("#dynamic_nav,#nav_back").click(function(){
//  	$("#dynamic_nav").load("dynamic/nav/01nav.html");
//  	$("#chat").load("dynamic/chat/02chat.html");
//  	$("#menus").show();
//  	
//  })

});