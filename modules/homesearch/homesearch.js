define(["text!./homesearch.html","css!./homesearch.css"],function(html){

	function render(){
		$(".page").html(html);
	}

	return {
		render:render
	}
	
})