define(["text!./myorders.html","css!./myorders.css"],function(html){

	function render(){
		$(".page").html(html);
	}

	return {
		render:render
	}
	
})