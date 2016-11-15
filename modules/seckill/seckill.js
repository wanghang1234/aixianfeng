define(["text!./seckill.html","css!./seckill.css"],function(html){

	function render(){
		$(".page").html(html);
	}

	return {
		render:render
	}
	
})