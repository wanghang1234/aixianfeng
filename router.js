define(['backbone'],function(){
  
  var Router = Backbone.Router.extend({

      routes: {
        "home": "homeFn",
        "market": "marketFn",
        "book": "bookFn",
        "car": "carFn",
        "mine": "mineFn",
        "seckill":"seckillFn",
        "myorders":"myordersFn",
        "marketsearch":"marketsearchFn",
        "intergral":"intergralFn",
        "homesearch":"homesearchFn",
        "*actions":'defaultAction'
      },
      seckillFn:function(){
      	require(['./modules/seckill/seckill.js'],function(seckill){
            seckill.render();
          })
      },
      myordersFn:function(){
      	require(['./modules/myorders/myorders.js'],function(myorders){
            myorders.render();
          })
      },
      homesearchFn:function(){
	      	require(['./modules/homesearch/homesearch.js'],function(homesearch){
	            homesearch.render();
	        })
      },
      intergralFn:function(){
      	require(['./modules/intergral/intergral.js'],function(intergral){
            intergral.render();
          })
      },
      marketsearchFn:function(){
      	require(['./modules/marketsearch/marketsearch.js'],function(marketsearch){
           marketsearch.render();
          })
      },
      homeFn: function() {
          require(['./modules/home/home.js'],function(home){
            home.render();
          })
      },
      seckillFn: function() {
          require(['./modules/seckill/seckill.js'],function(seckill){
            seckill.render();
          })
      },
      marketFn: function() {
        require(['./modules/market/market.js'],function(market){
          market.render();
        })
      },
     bookFn: function() {
     	require(['./modules/book/book.js'],function(book){
          book.render();
          book.add();
          book.createObj();
          book.resetIndex();
        })
      },
      carFn: function() {
      	require(['./modules/car/car.js'],function(car){
          car.render();
          car.readData();
          car.allPrice();
          car.count();

        })
      },
      mineFn: function() {
      	require(['./modules/mine/mine.js'],function(mine){
          mine.render();
        })
      },
      defaultAction:function(){
        location.hash = 'home'
      }

  });

  var router = new Router();
})
