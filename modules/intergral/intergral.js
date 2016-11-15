define(["text!./intergral.html","css!./intergral.css"],function(html){

	function render(){
		$(".page").html(html);
	}

	return {
		render:render
	}
	
})