define(["text!./marketsearch.html","css!./marketsearch.css"],function(html){

	function render(){
		$(".page").html(html);
	}

	return {
		render:render
	}
	
})