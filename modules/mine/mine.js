define(["text!./mine.html","css!./mine.css"],function(html){

	function render(){
		$(".page").html(html);
	}

	return {
		render:render
	}
	
})