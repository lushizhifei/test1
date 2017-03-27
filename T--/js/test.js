// 自定义一个模块
define(["jquery"], function(jq){

	console.log("tes模块", jq("body"))

	function test(){
		alert("hello");
	}

	// test();

	return {
		get : function(){
			return "get方法返回的结果值";
		}
	}
});