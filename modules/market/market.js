define(["text!./market.html","css!./market.css"],function(html){

	function render(){
		$(".page").html(html);
	}

	//因为进入相应的hash值会重新加载脚本文件，相当于重置该页面的所有属性
	//所以无论是静态添加的index值或者是动态添加的index值都为重置为零
	//因此，我们从sessionStorage中获取我们的商品元素的index，重新赋值给相应的商品
	//因为底部会有将对象添加到sessionStorage的事件
	//所以在重新赋值index后，清空相应商品的sessionStorage,故封装函数
	function resetIndex(){
		//用两个for循环来确定相应的dl的index
		$(".marketList dl").each(function(i,element){
			for(var j in sessionStorage){
				//两个商品的名称相同，则说明对应上了相应的值
				if ( $(element).find(".name").html() == JSON.parse(sessionStorage[j]).name ) {
					//给相应的dl的index值重置
					$(element).attr("index",JSON.parse(sessionStorage[j]).index);
					//清除sessionStorage里相应的商品对象
					sessionStorage.removeItem($(element).find(".name").html());
				};
			}
		})
	}

	//添加商品的事件处理
	function add(){
		var allNum = document.querySelector(".allNum");	
		var addBtns = document.querySelectorAll(".addNum");
		for (var i = 0; i < addBtns.length; i++) {
			addBtns[i].onclick = function(){
				//设置底部商品栏商品的总数量
				var a = parseInt(allNum.innerHTML);
				a++;
				$(allNum).html(a);
				//设置index的值，来记录该类商品的数量
				var b = $(this).parent().attr("index");
				b++;
				$(this).parent().attr("index",b);
			}
		};
	}
	//返回对象
	return {
		render:render
	}
	
})