$(window).load(function(){
	








///topic box expansion
	var box1 = $(".small-box");
	box1.on("click", function (){
		box1.attr("class","large-box");
	});
});
// for(var i =0; i < topics.length; i++){
// 	var id = topics[i];
// 	var box = $(id);
// 	box.on("click", function (){
// 		box.attr("class","large-box");
// 	});
// }

// if(box1.attr('class')=='large-box'){
// 	$(".small-box").attr("class", "hidden");
// };

// var box1 = $(".small-box");
// box1.on("click", function (){
// 	box1.attr("id","active");
// });
// 	if(box1.attr('id')=="active"){
// 		box1.attr('class'=='large-box')
// 	}

// box 1 on click set a class of active. if class == active set id = large-box