$(window).load(function(){
	
///topic box expansion
	$("#topicBoxes").delegate("div", "click", function (){
		$(this).attr("class","large-box");
		// app.get('/aPost/:id').done(renderDiv)
		// console.log(data.json);
	})

	// function renderDiv(data) {
	// 	console.log(data.topic);
	// 	// $(".innerText").html(data.topic)
	// }
});
