define(["text!./home.html","css!./home.css"],function(html){

	function render(){
		$(".page").html(html);
	}


	return {
		render:render
	}
	
})