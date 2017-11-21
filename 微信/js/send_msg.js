$(function() {    



		var key = "b7f3afeea99c40c7a9df742f64551105";

		var url = "http://www.tuling123.com/openapi/api";
		
		$('#content').bind('keydown',function(event){
        if(event.keyCode == "13") {                
			var info = {

				"key": key,

				"info": $("#content").val()   // = content.value

			}			
			var self = $("<div class='chat_list flex x-end y-items-center'>"+"<div class='right size '>"+$("#content").val()+"</div><div class='right_img'></div></div>")		          
			$("#list").append(self)						
			$.ajax({

				type: "POST",

				url: url,

				data: info,

				dataType: "json",
			

				success: function(result) {

					var robot = $("<div class='chat_list flex x-start y-items-center'>"+"<div class='left_img' style='background-image:url(/img/机器人.svg)'></div>"+"<div class='left size '>"+result.text+"</div></div>")


                  
					$("#list").append(robot)

				

				}

			});
			
			
　        　
              
			
			
        }
        })

		$('#btn').click(function() {

			

			var info = {

				"key": key,

				"info": $("#content").val()   // = content.value

			}

			

			var self = $("<div class='chat_list flex x-end y-items-center'>"+"<div class='right size '>"+$("#content").val()+"</div><div class='right_img'></div></div>")


			
           

			$("#list").append(self)
			
			
			$.ajax({

				type: "POST",

				url: url,

				data: info,

				dataType: "json",
			

				success: function(result) {

					var robot = $("<div class='chat_list flex x-start y-items-center'>"+"<div class='left_img'></div>"+"<div class='left size '>"+result.text+"</div></div>")

                  
					$("#list").append(robot)

				

				}

			});
			
			
　        　
              


		})

        

	})

