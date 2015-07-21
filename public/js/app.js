$(window).load(function(){
	
///topic box expansion
	$("#topicBoxes").delegate("div", "click", function (){
		$(this).attr("class","large-box");
	})
});
