define(["text!./car.html","css!./car.css"],function(html){

	function render(){
		$(".page").html(html);
	}

	function readData(){
		var text = $(".choosedGoods").html();
		for(var j in sessionStorage){
			//取出每一个对象
			var dataObj = JSON.parse(sessionStorage[j]);
			//拼接成相应的字符串再添加到商品框中
			text += createDl(dataObj);
		}
		$(".choosedGoods").html(text);
	}
	
	//计算总的价钱
	function allPrice(){
		//获取底部栏中节点
		var allNum = document.querySelector(".allNum");	
		var a = parseInt(allNum.innerHTML);
		//获取加减按钮的节点
		var reduceBtn = document.querySelectorAll(".reduce");
		var plusBtn = document.querySelectorAll(".plus");
		//点击减少按钮的事件处理
		$(reduceBtn).each(function(i,element){
			$(element).click(function(){
				var k = $(this).parent().find(".num").html();
				k--;
				$(this).parent().find(".num").html(k);
				//取出本地存储文件,给相应的index值减1
				var objGoodName = $(this).parent().parent().find(".goodname").html();
				//相应的本地文件的名称为$(this).parent().parent().find(".goodname").html()
				var myobj = JSON.parse(sessionStorage.getItem(objGoodName));
				myobj.index-=1;
				sessionStorage.removeItem(objGoodName);
				sessionStorage.setItem(objGoodName,JSON.stringify(myobj));
				//当商品数量小于等于0时，去除对应的dl,并且去除sessionStorage里的商品对象
				if (k<=0) {
					sessionStorage.removeItem(objGoodName);
					$(this).parent().parent().hide()
				};
				//底部显示的商品数量做出相应的加减
				a--;
				if (a<=0) {
					$(".allNum").hide();
				};
				$(allNum).html(a);
				//商品总价的计算
				count();
			})
		})
		//点击增加按钮的事件处理
		$(plusBtn).each(function(i,element){
			$(element).click(function(){
				//相应的商品数量增加
				var k = $(this).parent().find(".num").html();
				k++;
				$(this).parent().find(".num").html(k);
				//相应的本地文件的名称为$(this).parent().parent().find(".goodname").html()
				var objGoodName = $(this).parent().parent().find(".goodname").html();
				//取出相应的对象
				var myobj = JSON.parse(sessionStorage.getItem(objGoodName));
				//因为商品数量增加，增加对象的index值
				myobj.index++;
				//删除相同名称原有的对象
				sessionStorage.removeItem(objGoodName);
				//增加相同名称新的对象
				sessionStorage.setItem(objGoodName,JSON.stringify(myobj));
				//底部显示的商品数量做出相应的加减
				a++;
				$(allNum).html(a);
				//商品总价的计算
				count();
			})
		})		
	}


	//商品总价的计算方法
	function count(){
			var totalPrice = document.querySelector(".totalPrice");
			var addPrice = Number($(totalPrice).html());
			addPrice = 0;
			//遍历商品框中的dl，每一个dl中单价乘数量的和即为商品总价钱
			$(".choosedGoods dl").each(function(j,ele){
				addPrice += Number($(ele).find(".singlePrice").html())*Number($(ele).find(".num").html());
			})		
			//将获取到的值赋值给相应的节点
			addPrice = parseInt(addPrice*10)/10;
			$(".totalPrice").html(addPrice);
	}
	//拼接dl字符串的方法
	function createDl(obj){
		var str = "<dl><img src='images/3_03.png'/><p><span class='reduce'><img src=";
			str += "'images/3_07.png'";
			str += "/></span><span class=";
			str += "'num'";
			str += ">"+obj.index+"</span><span class='plus'><img src=";
			str += "'images/1_26.png'";
			str += "/></span></p><dt><img src=";
			str += obj.img;
			str += "/></dt><dd class='goodname'>";
			str += obj.name;
			str += "</dd><dd>￥<span class='singlePrice'>";
			str += obj.price;
			str += "</span></dd></dl>"
		
		return str;
	}
	return {
		render:render,
		readData:readData,
		allPrice:allPrice,
		count:count
	}	
})